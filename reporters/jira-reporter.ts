import { Reporter, TestCase, TestResult } from '@playwright/test/reporter';

export default class JiraReporter implements Reporter {
  private jiraDomain = process.env.JIRA_DOMAIN || 'your-domain.atlassian.net';
  private jiraEmail = process.env.JIRA_EMAIL || 'your-email@example.com';
  private jiraApiToken = process.env.JIRA_API_TOKEN || 'your-api-token';
  private jiraProjectKey = process.env.JIRA_PROJECT_KEY || 'SCRUM';

  async onTestEnd(test: TestCase, result: TestResult) {
    // Chỉ tạo bug khi test thất bại
    if (result.status === 'failed') {
      console.log(`\n[JiraReporter] Test failed: "${test.title}". Đang tiến hành tạo Bug trên Jira...`);
      await this.createJiraBug(test, result);
    }
  }

  private async createJiraBug(test: TestCase, result: TestResult) {
    const url = `https://${this.jiraDomain}/rest/api/3/issue`;
    const auth = Buffer.from(`${this.jiraEmail}:${this.jiraApiToken}`).toString('base64');

    // Cấu trúc data theo Jira REST API v3
    const data = {
      fields: {
        project: {
          key: this.jiraProjectKey,
        },
        summary: `[Tự động] Test thất bại: ${test.title}`,
        description: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: `Lỗi xảy ra trong test case: ${test.title}\n\nFile test: ${test.location.file}\n\nChi tiết lỗi:\n${result.error?.message || 'Không có chi tiết lỗi'}`
                }
              ]
            }
          ]
        },
        issuetype: {
          name: "Bug", // Issue type của bạn, thường là 'Bug'
        },
      },
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        const json = await response.json();
        console.log(`[JiraReporter] ✅ Tạo Bug thành công! Link Jira: https://${this.jiraDomain}/browse/${json.key}`);
      } else {
        const errorText = await response.text();
        console.error(`[JiraReporter] ❌ Lỗi khi tạo Bug trên Jira: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      console.error(`[JiraReporter] ❌ Đã có lỗi xảy ra khi gọi API Jira:`, error);
    }
  }
}
