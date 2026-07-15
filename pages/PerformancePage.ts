import { Page, expect } from "@playwright/test";

export class PerformancePage {
  constructor(private page: Page) { }

  // ==================== METHODS ====================

  // Thu thập các chỉ số hiệu năng thông qua Navigation và Paint Timing API của trình duyệt
  async scanPerformanceMetrics() {
    // Chờ cho đến khi toàn bộ tài nguyên trang được load xong hoàn toàn
    await this.page.waitForLoadState("load");

    return await this.page.evaluate(() => {
      // 1. Lấy thông tin từ Navigation Timing API
      const [navigationEntry] = performance.getEntriesByType("navigation") as any[];
      if (!navigationEntry) {
        return {
          ttfb: 0,
          domContentLoaded: 0,
          loadTime: 0,
          fcp: 0
        };
      }

      const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
      const domContentLoaded = Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime);
      const loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.startTime);

      // 2. Lấy thông tin FCP (First Contentful Paint) từ Paint Timing API
      const paintEntries = performance.getEntriesByType("paint");
      const fcpEntry = paintEntries.find(entry => entry.name === "first-contentful-paint");
      const fcp = fcpEntry ? Math.round(fcpEntry.startTime) : 0;

      return { ttfb, domContentLoaded, loadTime, fcp };
    });
  }

  // Chèn giao diện HUD (Báo cáo Hiệu năng) trực quan lên DOM để chụp ảnh
  async injectVisualPerformanceReport(pageName: string, metrics: any, thresholds: any) {
    await this.page.evaluate(({ pageName, metrics, thresholds }) => {
      const oldCard = document.getElementById("perf-report-card");
      if (oldCard) oldCard.remove();

      const container = document.createElement("div");
      container.id = "perf-report-card";

      container.style.position = "fixed";
      container.style.top = "10px";
      container.style.right = "10px";
      container.style.width = "480px";
      container.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
      container.style.color = "#f8fafc";
      container.style.borderRadius = "12px";
      container.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.5)";
      container.style.fontFamily = "system-ui, sans-serif";
      container.style.padding = "20px";
      container.style.zIndex = "9999999";
      container.style.pointerEvents = "none";
      container.style.maxHeight = "95vh";
      container.style.overflowY = "auto";
      container.style.lineHeight = "1.4";

      const isTtfbPass = metrics.ttfb <= thresholds.ttfb;
      const isFcpPass = metrics.fcp <= thresholds.fcp;
      const isDomPass = metrics.domContentLoaded <= thresholds.domContentLoaded;
      const isLoadPass = metrics.loadTime <= thresholds.loadTime;

      const allPass = isTtfbPass && isFcpPass && isDomPass && isLoadPass;

      container.style.border = `2px solid ${allPass ? '#22c55e' : '#ef4444'}`;

      const renderRow = (label: string, actual: number, limit: number, isPass: boolean, detail: string) => `
        <div style="background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 6px; border-left: 4px solid ${isPass ? '#22c55e' : '#ef4444'}; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px; align-items: center;">
            <strong style="color: #cbd5e1; font-size: 13px;">${label}</strong>
            <span style="font-size: 14px;">${isPass ? '✅' : '❌'}</span>
          </div>
          <div style="display: flex; justify-content: space-between; color: ${isPass ? '#4ade80' : '#f87171'}; font-size: 12px; font-weight: bold; margin-bottom: 2px;">
            <span>Thực tế: ${actual} ms</span>
            <span style="color: #94a3b8; font-weight: normal;">Giới hạn: ${limit} ms</span>
          </div>
          <div style="color: #94a3b8; font-size: 11px;">📌 ${detail}</div>
        </div>
      `;

      container.innerHTML = `
        <div style="font-weight: bold; font-size: 15px; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span>⚡ WEB PERFORMANCE REPORT</span>
          <span style="color: ${allPass ? '#22c55e' : '#ef4444'}; font-size: 12px; font-weight: bold;">${allPass ? 'TỐI ƯU' : 'CẦN TỐI ƯU'}</span>
        </div>
        <div style="font-size: 12px; margin-bottom: 12px; color: #94a3b8;">
          <strong>Trang:</strong> <span style="color: #60a5fa;">${pageName}</span>
        </div>
        ${renderRow("1. TTFB (Time to First Byte)", metrics.ttfb, thresholds.ttfb, isTtfbPass, "Thời gian phản hồi đầu tiên từ Server.")}
        ${renderRow("2. FCP (First Contentful Paint)", metrics.fcp, thresholds.fcp, isFcpPass, "Thời gian vẽ phần tử nội dung đầu tiên lên màn hình.")}
        ${renderRow("3. DOM Content Loaded", metrics.domContentLoaded, thresholds.domContentLoaded, isDomPass, "Thời gian tải xong cấu trúc cây thư mục DOM HTML.")}
        ${renderRow("4. Window Load Time", metrics.loadTime, thresholds.loadTime, isLoadPass, "Tổng thời gian trang web tải hoàn tất toàn bộ tài nguyên.")}
      `;
      document.body.appendChild(container);
    }, { pageName, metrics, thresholds });
  }

  // ==================== ASSERTIONS ====================

  async verifyTTFB(actual: number, limit: number) {
    expect.soft(actual, `Lỗi Hiệu năng: TTFB đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  }

  async verifyFCP(actual: number, limit: number) {
    expect.soft(actual, `Lỗi Hiệu năng: FCP đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  }

  async verifyDOMContentLoaded(actual: number, limit: number) {
    expect.soft(actual, `Lỗi Hiệu năng: DOMContentLoaded đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  }

  async verifyLoadTime(actual: number, limit: number) {
    expect.soft(actual, `Lỗi Hiệu năng: Window Load Time đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  }
}
