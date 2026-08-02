# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/seo.spec.ts >> SEO Optimization Feature Tests >> Kiểm Tra chất lượng trang web về seo: Trang danh sách API (API Testing Page)
- Location: tests/web/seo.spec.ts:15:9

# Error details

```
Error: Lỗi SEO: Độ dài Title là 21. Phải nằm trong khoảng 50 - 60 ký tự.

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    21
```

```
Error: Lỗi CRITICAL: Thẻ <meta name="description"> không tồn tại!

expect(received).not.toBeNull()

Received: null
```

```
TypeError: Cannot read properties of null (reading 'trim')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e4]: Please wait while your request is being verified...
  - generic:
    - generic:
      - generic: 🎯 STRICT SEO AUDIT REPORT
      - generic: CẦN TỐI ƯU
    - generic:
      - strong: "Trang:"
      - text: Trang danh sách API (API Testing Page)
    - generic:
      - generic:
        - strong: 1. Title (50-60 ký tự)
        - generic: ❌
      - generic: One moment, please... (21 ký tự)
      - generic: 📌 Độ dài hoàn hảo để hiển thị trên Google Search.
    - generic:
      - generic:
        - strong: 2. Meta Description (150-160 ký tự)
        - generic: ❌
      - generic: Không tìm thấy hoặc không hợp lệ!
      - generic: 📌 Độ dài tối ưu để tránh bị cắt xén nội dung mô tả.
    - generic:
      - generic:
        - strong: 3. Thẻ H1 (Duy nhất)
        - generic: ❌
      - generic: Không tìm thấy hoặc không hợp lệ!
      - generic: 📌 Mỗi trang bắt buộc phải có đúng 1 thẻ H1 duy nhất.
    - generic:
      - generic:
        - strong: 4. Canonical Tag
        - generic: ❌
      - generic: Không tìm thấy hoặc không hợp lệ!
      - generic: 📌 Chỉ định trang gốc tránh lỗi trùng lặp nội dung.
    - generic:
      - generic:
        - strong: 5. Robots Indexability
        - generic: ✅
      - generic: Mặc định (Index)
      - generic: 📌 Đảm bảo Googlebot được phép thu thập dữ liệu và index.
    - generic:
      - generic:
        - strong: 6. Open Graph (Mạng xã hội)
        - generic: ❌
      - generic: Thiếu thẻ Open Graph
      - generic: 📌 Tối ưu hiển thị hình ảnh, tiêu đề khi share link mạng xã hội.
    - generic:
      - generic:
        - strong: 7. Thuộc tính Alt của ảnh
        - generic: ✅
      - generic: 100% hình ảnh có Alt
      - generic: 📌 Giúp SEO hình ảnh và hỗ trợ người khiếm thị đọc nội dung.
```

# Test source

```ts
  29  |     };
  30  | 
  31  |     const metaVal = await getAttributeSafe(this.metaDescriptionSelector, "content");
  32  |     const h1Texts = await this.page.locator("h1").allTextContents();
  33  |     const canonical = await getAttributeSafe(this.canonicalSelector, "href");
  34  |     const robots = await getAttributeSafe(this.robotsSelector, "content");
  35  | 
  36  |     // Thẻ Open Graph (Chia sẻ mạng xã hội)
  37  |     const ogTitle = await getAttributeSafe(this.ogTitleSelector, "content");
  38  |     const ogDesc = await getAttributeSafe(this.ogDescSelector, "content");
  39  |     const ogImage = await getAttributeSafe(this.ogImageSelector, "content");
  40  | 
  41  |     // Đếm số hình ảnh thiếu thẻ alt
  42  |     const missingAltCount = await this.page.locator(this.imagesWithoutAltSelector).count();
  43  | 
  44  |     return { titleVal, metaVal, h1Texts, canonical, robots, ogTitle, ogDesc, ogImage, missingAltCount };
  45  |   }
  46  | 
  47  |   // Bảng báo cáo UI hiển thị trên DOM
  48  |   async injectVisualSEOReport(pageName: string, data: any) {
  49  |     await this.page.evaluate(({ pageName, data }) => {
  50  |       const oldCard = document.getElementById("seo-report-card");
  51  |       if (oldCard) oldCard.remove();
  52  | 
  53  |       const container = document.createElement("div");
  54  |       container.id = "seo-report-card";
  55  | 
  56  |       container.style.position = "fixed";
  57  |       container.style.top = "10px";
  58  |       container.style.right = "10px";
  59  |       container.style.width = "480px";
  60  |       container.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
  61  |       container.style.color = "#f8fafc";
  62  |       container.style.borderRadius = "12px";
  63  |       container.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.5)";
  64  |       container.style.fontFamily = "system-ui, sans-serif";
  65  |       container.style.padding = "20px";
  66  |       container.style.zIndex = "9999999";
  67  |       container.style.pointerEvents = "none";
  68  |       container.style.maxHeight = "95vh";
  69  |       container.style.overflowY = "auto";
  70  |       container.style.lineHeight = "1.4";
  71  | 
  72  |       // Đánh giá các tiêu chí khắt khe
  73  |       const isTitleStrict = !!data.titleVal && data.titleVal.length >= 50 && data.titleVal.length <= 60;
  74  |       const isMetaStrict = !!data.metaVal && data.metaVal.length >= 150 && data.metaVal.length <= 160;
  75  |       const isH1Strict = data.h1Texts.length === 1;
  76  |       const isCanonicalValid = !!data.canonical;
  77  |       const isIndexable = !data.robots?.toLowerCase().includes("noindex");
  78  |       const hasOgTags = !!data.ogTitle && !!data.ogDesc && !!data.ogImage;
  79  |       const isImageAltPass = data.missingAltCount === 0;
  80  | 
  81  |       const allPass = isTitleStrict && isMetaStrict && isH1Strict && isCanonicalValid && isIndexable && hasOgTags && isImageAltPass;
  82  | 
  83  |       container.style.border = `2px solid ${allPass ? '#22c55e' : '#ef4444'}`;
  84  | 
  85  |       const renderRow = (label: string, value: string, isPass: boolean, detail: string) => `
  86  |         <div style="background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 6px; border-left: 4px solid ${isPass ? '#22c55e' : '#ef4444'}; margin-bottom: 8px;">
  87  |           <div style="display: flex; justify-content: space-between; margin-bottom: 2px; align-items: center;">
  88  |             <strong style="color: #cbd5e1; font-size: 13px;">${label}</strong>
  89  |             <span style="font-size: 14px;">${isPass ? '✅' : '❌'}</span>
  90  |           </div>
  91  |           <div style="color: ${isPass ? '#4ade80' : '#f87171'}; font-size: 12px; font-style: italic; word-break: break-word; margin-bottom: 2px;">
  92  |             ${value || "Không tìm thấy hoặc không hợp lệ!"}
  93  |           </div>
  94  |           <div style="color: #94a3b8; font-size: 11px;">📌 ${detail}</div>
  95  |         </div>
  96  |       `;
  97  | 
  98  |       container.innerHTML = `
  99  |         <div style="font-weight: bold; font-size: 15px; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
  100 |           <span>🎯 STRICT SEO AUDIT REPORT</span>
  101 |           <span style="color: ${allPass ? '#22c55e' : '#ef4444'}; font-size: 12px; font-weight: bold;">${allPass ? 'HOÀN HẢO' : 'CẦN TỐI ƯU'}</span>
  102 |         </div>
  103 |         <div style="font-size: 12px; margin-bottom: 12px; color: #94a3b8;">
  104 |           <strong>Trang:</strong> <span style="color: #60a5fa;">${pageName}</span>
  105 |         </div>
  106 |         ${renderRow("1. Title (50-60 ký tự)", data.titleVal ? `${data.titleVal} (${data.titleVal.length} ký tự)` : "", isTitleStrict, "Độ dài hoàn hảo để hiển thị trên Google Search.")}
  107 |         ${renderRow("2. Meta Description (150-160 ký tự)", data.metaVal ? `${data.metaVal} (${data.metaVal.length} ký tự)` : "", isMetaStrict, "Độ dài tối ưu để tránh bị cắt xén nội dung mô tả.")}
  108 |         ${renderRow("3. Thẻ H1 (Duy nhất)", data.h1Texts.length > 0 ? `Tìm thấy ${data.h1Texts.length} thẻ: "${data.h1Texts[0]}"` : "", isH1Strict, "Mỗi trang bắt buộc phải có đúng 1 thẻ H1 duy nhất.")}
  109 |         ${renderRow("4. Canonical Tag", data.canonical, isCanonicalValid, "Chỉ định trang gốc tránh lỗi trùng lặp nội dung.")}
  110 |         ${renderRow("5. Robots Indexability", data.robots || "Mặc định (Index)", isIndexable, "Đảm bảo Googlebot được phép thu thập dữ liệu và index.")}
  111 |         ${renderRow("6. Open Graph (Mạng xã hội)", hasOgTags ? "Đầy đủ: og:title, og:desc, og:image" : "Thiếu thẻ Open Graph", hasOgTags, "Tối ưu hiển thị hình ảnh, tiêu đề khi share link mạng xã hội.")}
  112 |         ${renderRow("7. Thuộc tính Alt của ảnh", data.missingAltCount === 0 ? "100% hình ảnh có Alt" : `Phát hiện ${data.missingAltCount} ảnh thiếu Alt`, isImageAltPass, "Giúp SEO hình ảnh và hỗ trợ người khiếm thị đọc nội dung.")}
  113 |       `;
  114 |       document.body.appendChild(container);
  115 |     }, { pageName, data });
  116 |   }
  117 | 
  118 |   // ==================== ASSERTIONS ====================
  119 | 
  120 |   async verifyStrictTitle(titleVal: string) {
  121 |     expect.soft(titleVal, "Lỗi CRITICAL: Thẻ <title> không tồn tại!").not.toBeNull();
  122 |     const length = titleVal.trim().length;
  123 |     expect.soft(length, `Lỗi SEO: Độ dài Title là ${length}. Phải nằm trong khoảng 50 - 60 ký tự.`).toBeGreaterThanOrEqual(50);
  124 |     expect.soft(length, `Lỗi SEO: Độ dài Title là ${length}. Phải nằm trong khoảng 50 - 60 ký tự.`).toBeLessThanOrEqual(60);
  125 |   }
  126 | 
  127 |   async verifyStrictMetaDescription(metaVal: string | null) {
  128 |     expect.soft(metaVal, "Lỗi CRITICAL: Thẻ <meta name=\"description\"> không tồn tại!").not.toBeNull();
> 129 |     const length = metaVal!.trim().length;
      |                             ^ TypeError: Cannot read properties of null (reading 'trim')
  130 |     expect.soft(length, `Lỗi SEO: Độ dài Meta Description là ${length}. Phải từ 150 - 160 ký tự.`).toBeGreaterThanOrEqual(150);
  131 |     expect.soft(length, `Lỗi SEO: Độ dài Meta Description là ${length}. Phải từ 150 - 160 ký tự.`).toBeLessThanOrEqual(160);
  132 |   }
  133 | 
  134 |   async verifyStrictH1(pageName: string, h1Texts: string[]) {
  135 |     const h1Count = h1Texts.length;
  136 |     expect.soft(h1Count, `Lỗi SEO NGHIÊM TRỌNG: ${pageName} có ${h1Count} thẻ H1. Bắt buộc phải có đúng 1 thẻ H1 duy nhất!`).toBe(1);
  137 |     if (h1Count > 0) {
  138 |       expect.soft(h1Texts[0].trim().length, "Lỗi: Thẻ H1 tồn tại nhưng nội dung bị bỏ trống!").toBeGreaterThan(0);
  139 |     }
  140 |   }
  141 | 
  142 |   async verifyCanonical(canonical: string | null) {
  143 |     expect.soft(canonical, "Lỗi SEO: Thiếu thẻ <link rel=\"canonical\">. Nguy cơ trùng lặp nội dung rất cao!").not.toBeNull();
  144 |     if (canonical !== null) {
  145 |       expect.soft(canonical, "Lỗi: URL Canonical không hợp lệ!").toMatch(/^https?:\/\//);
  146 |     }
  147 |   }
  148 | 
  149 |   async verifyIndexability(robots: string | null, expectIndexable: boolean = true) {
  150 |     const isNoindex = !!robots?.toLowerCase().includes("noindex");
  151 |     if (expectIndexable) {
  152 |       expect.soft(isNoindex, "Lỗi FATAL: Trang mong muốn được INDEX nhưng đang bị gắn thẻ 'noindex', Google sẽ bỏ qua trang này!").toBe(false);
  153 |     } else {
  154 |       expect.soft(isNoindex, "Cảnh báo SEO: Trang bảo mật hoặc nội bộ (như Checkout, Cart) mong muốn NOINDEX nhưng chưa được gắn thẻ 'noindex' để chặn Google!").toBe(true);
  155 |     }
  156 |   }
  157 | 
  158 |   async verifyOpenGraph(ogTitle: string | null, ogDesc: string | null, ogImage: string | null) {
  159 |     expect.soft(ogTitle, "Lỗi Social SEO: Thiếu og:title").not.toBeNull();
  160 |     expect.soft(ogDesc, "Lỗi Social SEO: Thiếu og:description").not.toBeNull();
  161 |     expect.soft(ogImage, "Lỗi Social SEO: Thiếu og:image").not.toBeNull();
  162 |   }
  163 | 
  164 |   async verifyImagesAltText(missingAltCount: number) {
  165 |     expect.soft(missingAltCount, `Lỗi SEO Hình ảnh: Đang có ${missingAltCount} hình ảnh thiếu thuộc tính 'alt'.`).toBe(0);
  166 |   }
  167 | }
```