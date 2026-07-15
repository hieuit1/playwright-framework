import { Page, expect } from "@playwright/test";

export class SeoPage {
  constructor(private page: Page) { }

  // ==================== LOCATORS ====================
  private metaDescriptionSelector = 'meta[name="description"]';
  private canonicalSelector = 'link[rel="canonical"]';
  private robotsSelector = 'meta[name="robots"]';
  private ogTitleSelector = 'meta[property="og:title"]';
  private ogDescSelector = 'meta[property="og:description"]';
  private ogImageSelector = 'meta[property="og:image"]';
  private imagesWithoutAltSelector = 'img:not([alt]), img[alt=""]';

  // ==================== METHODS ====================

  // Quét toàn diện các thông tin SEO từ DOM không gây timeout
  async scanSEOMetadata() {
    const titleVal = await this.page.title();

    // Hàm helper lấy attribute an toàn, không đợi timeout nếu thẻ không tồn tại
    const getAttributeSafe = async (selector: string, attrName: string): Promise<string | null> => {
      const locator = this.page.locator(selector);
      const count = await locator.count();
      if (count > 0) {
        return await locator.first().getAttribute(attrName).catch(() => null);
      }
      return null;
    };

    const metaVal = await getAttributeSafe(this.metaDescriptionSelector, "content");
    const h1Texts = await this.page.locator("h1").allTextContents();
    const canonical = await getAttributeSafe(this.canonicalSelector, "href");
    const robots = await getAttributeSafe(this.robotsSelector, "content");

    // Thẻ Open Graph (Chia sẻ mạng xã hội)
    const ogTitle = await getAttributeSafe(this.ogTitleSelector, "content");
    const ogDesc = await getAttributeSafe(this.ogDescSelector, "content");
    const ogImage = await getAttributeSafe(this.ogImageSelector, "content");

    // Đếm số hình ảnh thiếu thẻ alt
    const missingAltCount = await this.page.locator(this.imagesWithoutAltSelector).count();

    return { titleVal, metaVal, h1Texts, canonical, robots, ogTitle, ogDesc, ogImage, missingAltCount };
  }

  // Bảng báo cáo UI hiển thị trên DOM
  async injectVisualSEOReport(pageName: string, data: any) {
    await this.page.evaluate(({ pageName, data }) => {
      const oldCard = document.getElementById("seo-report-card");
      if (oldCard) oldCard.remove();

      const container = document.createElement("div");
      container.id = "seo-report-card";

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

      // Đánh giá các tiêu chí khắt khe
      const isTitleStrict = !!data.titleVal && data.titleVal.length >= 50 && data.titleVal.length <= 60;
      const isMetaStrict = !!data.metaVal && data.metaVal.length >= 150 && data.metaVal.length <= 160;
      const isH1Strict = data.h1Texts.length === 1;
      const isCanonicalValid = !!data.canonical;
      const isIndexable = !data.robots?.toLowerCase().includes("noindex");
      const hasOgTags = !!data.ogTitle && !!data.ogDesc && !!data.ogImage;
      const isImageAltPass = data.missingAltCount === 0;

      const allPass = isTitleStrict && isMetaStrict && isH1Strict && isCanonicalValid && isIndexable && hasOgTags && isImageAltPass;

      container.style.border = `2px solid ${allPass ? '#22c55e' : '#ef4444'}`;

      const renderRow = (label: string, value: string, isPass: boolean, detail: string) => `
        <div style="background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 6px; border-left: 4px solid ${isPass ? '#22c55e' : '#ef4444'}; margin-bottom: 8px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 2px; align-items: center;">
            <strong style="color: #cbd5e1; font-size: 13px;">${label}</strong>
            <span style="font-size: 14px;">${isPass ? '✅' : '❌'}</span>
          </div>
          <div style="color: ${isPass ? '#4ade80' : '#f87171'}; font-size: 12px; font-style: italic; word-break: break-word; margin-bottom: 2px;">
            ${value || "Không tìm thấy hoặc không hợp lệ!"}
          </div>
          <div style="color: #94a3b8; font-size: 11px;">📌 ${detail}</div>
        </div>
      `;

      container.innerHTML = `
        <div style="font-weight: bold; font-size: 15px; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
          <span>🎯 STRICT SEO AUDIT REPORT</span>
          <span style="color: ${allPass ? '#22c55e' : '#ef4444'}; font-size: 12px; font-weight: bold;">${allPass ? 'HOÀN HẢO' : 'CẦN TỐI ƯU'}</span>
        </div>
        <div style="font-size: 12px; margin-bottom: 12px; color: #94a3b8;">
          <strong>Trang:</strong> <span style="color: #60a5fa;">${pageName}</span>
        </div>
        ${renderRow("1. Title (50-60 ký tự)", data.titleVal ? `${data.titleVal} (${data.titleVal.length} ký tự)` : "", isTitleStrict, "Độ dài hoàn hảo để hiển thị trên Google Search.")}
        ${renderRow("2. Meta Description (150-160 ký tự)", data.metaVal ? `${data.metaVal} (${data.metaVal.length} ký tự)` : "", isMetaStrict, "Độ dài tối ưu để tránh bị cắt xén nội dung mô tả.")}
        ${renderRow("3. Thẻ H1 (Duy nhất)", data.h1Texts.length > 0 ? `Tìm thấy ${data.h1Texts.length} thẻ: "${data.h1Texts[0]}"` : "", isH1Strict, "Mỗi trang bắt buộc phải có đúng 1 thẻ H1 duy nhất.")}
        ${renderRow("4. Canonical Tag", data.canonical, isCanonicalValid, "Chỉ định trang gốc tránh lỗi trùng lặp nội dung.")}
        ${renderRow("5. Robots Indexability", data.robots || "Mặc định (Index)", isIndexable, "Đảm bảo Googlebot được phép thu thập dữ liệu và index.")}
        ${renderRow("6. Open Graph (Mạng xã hội)", hasOgTags ? "Đầy đủ: og:title, og:desc, og:image" : "Thiếu thẻ Open Graph", hasOgTags, "Tối ưu hiển thị hình ảnh, tiêu đề khi share link mạng xã hội.")}
        ${renderRow("7. Thuộc tính Alt của ảnh", data.missingAltCount === 0 ? "100% hình ảnh có Alt" : `Phát hiện ${data.missingAltCount} ảnh thiếu Alt`, isImageAltPass, "Giúp SEO hình ảnh và hỗ trợ người khiếm thị đọc nội dung.")}
      `;
      document.body.appendChild(container);
    }, { pageName, data });
  }

  // ==================== ASSERTIONS ====================

  async verifyStrictTitle(titleVal: string) {
    expect.soft(titleVal, "Lỗi CRITICAL: Thẻ <title> không tồn tại!").not.toBeNull();
    const length = titleVal.trim().length;
    expect.soft(length, `Lỗi SEO: Độ dài Title là ${length}. Phải nằm trong khoảng 50 - 60 ký tự.`).toBeGreaterThanOrEqual(50);
    expect.soft(length, `Lỗi SEO: Độ dài Title là ${length}. Phải nằm trong khoảng 50 - 60 ký tự.`).toBeLessThanOrEqual(60);
  }

  async verifyStrictMetaDescription(metaVal: string | null) {
    expect.soft(metaVal, "Lỗi CRITICAL: Thẻ <meta name=\"description\"> không tồn tại!").not.toBeNull();
    const length = metaVal!.trim().length;
    expect.soft(length, `Lỗi SEO: Độ dài Meta Description là ${length}. Phải từ 150 - 160 ký tự.`).toBeGreaterThanOrEqual(150);
    expect.soft(length, `Lỗi SEO: Độ dài Meta Description là ${length}. Phải từ 150 - 160 ký tự.`).toBeLessThanOrEqual(160);
  }

  async verifyStrictH1(pageName: string, h1Texts: string[]) {
    const h1Count = h1Texts.length;
    expect.soft(h1Count, `Lỗi SEO NGHIÊM TRỌNG: ${pageName} có ${h1Count} thẻ H1. Bắt buộc phải có đúng 1 thẻ H1 duy nhất!`).toBe(1);
    if (h1Count > 0) {
      expect.soft(h1Texts[0].trim().length, "Lỗi: Thẻ H1 tồn tại nhưng nội dung bị bỏ trống!").toBeGreaterThan(0);
    }
  }

  async verifyCanonical(canonical: string | null) {
    expect.soft(canonical, "Lỗi SEO: Thiếu thẻ <link rel=\"canonical\">. Nguy cơ trùng lặp nội dung rất cao!").not.toBeNull();
    if (canonical !== null) {
      expect.soft(canonical, "Lỗi: URL Canonical không hợp lệ!").toMatch(/^https?:\/\//);
    }
  }

  async verifyIndexability(robots: string | null, expectIndexable: boolean = true) {
    const isNoindex = !!robots?.toLowerCase().includes("noindex");
    if (expectIndexable) {
      expect.soft(isNoindex, "Lỗi FATAL: Trang mong muốn được INDEX nhưng đang bị gắn thẻ 'noindex', Google sẽ bỏ qua trang này!").toBe(false);
    } else {
      expect.soft(isNoindex, "Cảnh báo SEO: Trang bảo mật hoặc nội bộ (như Checkout, Cart) mong muốn NOINDEX nhưng chưa được gắn thẻ 'noindex' để chặn Google!").toBe(true);
    }
  }

  async verifyOpenGraph(ogTitle: string | null, ogDesc: string | null, ogImage: string | null) {
    expect.soft(ogTitle, "Lỗi Social SEO: Thiếu og:title").not.toBeNull();
    expect.soft(ogDesc, "Lỗi Social SEO: Thiếu og:description").not.toBeNull();
    expect.soft(ogImage, "Lỗi Social SEO: Thiếu og:image").not.toBeNull();
  }

  async verifyImagesAltText(missingAltCount: number) {
    expect.soft(missingAltCount, `Lỗi SEO Hình ảnh: Đang có ${missingAltCount} hình ảnh thiếu thuộc tính 'alt'.`).toBe(0);
  }
}