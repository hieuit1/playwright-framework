# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/seo.spec.ts >> SEO Optimization Feature Tests >> Kiểm Tra chất lượng trang web về seo: Trang chi tiết sản phẩm (Product Details Page)
- Location: tests/web/seo.spec.ts:15:9

# Error details

```
Error: Lỗi SEO: Độ dài Title là 37. Phải nằm trong khoảng 50 - 60 ký tự.

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    37
```

```
Error: Lỗi SEO: Độ dài Meta Description là 31. Phải từ 150 - 160 ký tự.

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 150
Received:    31
```

```
Error: Lỗi SEO NGHIÊM TRỌNG: Trang chi tiết sản phẩm (Product Details Page) có 0 thẻ H1. Bắt buộc phải có đúng 1 thẻ H1 duy nhất!

expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 0
```

```
Error: Lỗi SEO: Thiếu thẻ <link rel="canonical">. Nguy cơ trùng lặp nội dung rất cao!

expect(received).not.toBeNull()

Received: null
```

```
Error: Lỗi Social SEO: Thiếu og:title

expect(received).not.toBeNull()

Received: null
```

```
Error: Lỗi Social SEO: Thiếu og:description

expect(received).not.toBeNull()

Received: null
```

```
Error: Lỗi Social SEO: Thiếu og:image

expect(received).not.toBeNull()

Received: null
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "Website for automation practice" [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e39]:
    - generic [ref=e41]:
      - heading "Category" [level=2] [ref=e42]
      - generic [ref=e43]:
        - heading " Women" [level=4] [ref=e46]:
          - link " Women" [ref=e47] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e49]: 
            - text: Women
        - heading " Men" [level=4] [ref=e52]:
          - link " Men" [ref=e53] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e55]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e58]:
          - link " Kids" [ref=e59] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e61]: 
            - text: Kids
      - generic [ref=e62]:
        - heading "Brands" [level=2] [ref=e63]
        - list [ref=e65]:
          - listitem [ref=e66]:
            - link "(6) Polo" [ref=e67] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e68]: (6)
              - text: Polo
          - listitem [ref=e69]:
            - link "(5) H&M" [ref=e70] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e71]: (5)
              - text: H&M
          - listitem [ref=e72]:
            - link "(5) Madame" [ref=e73] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e74]: (5)
              - text: Madame
          - listitem [ref=e75]:
            - link "(3) Mast & Harbour" [ref=e76] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e77]: (3)
              - text: Mast & Harbour
          - listitem [ref=e78]:
            - link "(4) Babyhug" [ref=e79] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e80]: (4)
              - text: Babyhug
          - listitem [ref=e81]:
            - link "(3) Allen Solly Junior" [ref=e82] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e83]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e84]:
            - link "(3) Kookie Kids" [ref=e85] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e86]: (3)
              - text: Kookie Kids
          - listitem [ref=e87]:
            - link "(5) Biba" [ref=e88] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e89]: (5)
              - text: Biba
    - generic [ref=e90]:
      - generic [ref=e91]:
        - img "ecommerce website products" [ref=e94]
        - generic [ref=e96]:
          - img "ecommerce website products" [ref=e97]
          - heading "Blue Top" [level=2] [ref=e98]
          - paragraph [ref=e99]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=e100]
          - generic [ref=e101]:
            - generic [ref=e102]: Rs. 500
            - generic [ref=e103]: "Quantity:"
            - spinbutton [ref=e104]: "1"
            - button " Add to cart" [ref=e105] [cursor=pointer]:
              - generic [ref=e106]: 
              - text: Add to cart
          - paragraph [ref=e107]: "Availability: In Stock"
          - paragraph [ref=e108]: "Condition: New"
          - paragraph [ref=e109]: "Brand: Polo"
      - generic [ref=e110]:
        - list [ref=e112]:
          - listitem [ref=e113]:
            - link "Write Your Review" [ref=e114]:
              - /url: "#reviews"
        - generic [ref=e116]:
          - generic [ref=e117]:
            - textbox "Your Name" [ref=e118]
            - textbox "Email Address" [ref=e119]
          - textbox "Add Review Here!" [ref=e120]
          - button "Submit" [ref=e121] [cursor=pointer]
  - contentinfo [ref=e122]:
    - generic [ref=e127]:
      - heading "Subscription" [level=2] [ref=e128]
      - generic [ref=e129]:
        - textbox "Your email address" [ref=e130]
        - button "" [ref=e131] [cursor=pointer]:
          - generic [ref=e132]: 
        - paragraph [ref=e133]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e137]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - generic:
      - generic: 🎯 STRICT SEO AUDIT REPORT
      - generic: CẦN TỐI ƯU
    - generic:
      - strong: "Trang:"
      - text: Trang chi tiết sản phẩm (Product Details Page)
    - generic:
      - generic:
        - strong: 1. Title (50-60 ký tự)
        - generic: ❌
      - generic: Automation Exercise - Product Details (37 ký tự)
      - generic: 📌 Độ dài hoàn hảo để hiển thị trên Google Search.
    - generic:
      - generic:
        - strong: 2. Meta Description (150-160 ký tự)
        - generic: ❌
      - generic: This is for automation practice (31 ký tự)
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
      - generic: index
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
  129 |     const length = metaVal!.trim().length;
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
> 161 |     expect.soft(ogImage, "Lỗi Social SEO: Thiếu og:image").not.toBeNull();
      |                                                                ^ Error: Lỗi Social SEO: Thiếu og:image
  162 |   }
  163 | 
  164 |   async verifyImagesAltText(missingAltCount: number) {
  165 |     expect.soft(missingAltCount, `Lỗi SEO Hình ảnh: Đang có ${missingAltCount} hình ảnh thiếu thuộc tính 'alt'.`).toBe(0);
  166 |   }
  167 | }
```