# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/seo.spec.ts >> SEO Optimization Feature Tests >> Kiểm Tra chất lượng trang web về seo: Trang chủ (Home Page)
- Location: tests/web/seo.spec.ts:15:9

# Error details

```
Error: Lỗi SEO: Độ dài Title là 19. Phải nằm trong khoảng 50 - 60 ký tự.

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 50
Received:    19
```

```
Error: Lỗi SEO: Độ dài Meta Description là 31. Phải từ 150 - 160 ký tự.

expect(received).toBeGreaterThanOrEqual(expected)

Expected: >= 150
Received:    31
```

```
Error: Lỗi SEO NGHIÊM TRỌNG: Trang chủ (Home Page) có 3 thẻ H1. Bắt buộc phải có đúng 1 thẻ H1 duy nhất!

expect(received).toBe(expected) // Object.is equality

Expected: 1
Received: 3
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
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link "Test Cases" [ref=e51] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e52]
          - link "APIs list for practice" [ref=e53] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e54]
        - img "demo website for practice" [ref=e56]
    - link "" [ref=e57] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e58]: 
    - link "" [ref=e59] [cursor=pointer]:
      - /url: "#slider-carousel"
      - generic [ref=e60]: 
  - generic [ref=e63]:
    - generic [ref=e65]:
      - heading "Category" [level=2] [ref=e66]
      - generic [ref=e67]:
        - heading " Women" [level=4] [ref=e70]:
          - link " Women" [ref=e71] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e73]: 
            - text: Women
        - heading " Men" [level=4] [ref=e76]:
          - link " Men" [ref=e77] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e79]: 
            - text: Men
        - heading " Kids" [level=4] [ref=e82]:
          - link " Kids" [ref=e83] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e85]: 
            - text: Kids
      - generic [ref=e86]:
        - heading "Brands" [level=2] [ref=e87]
        - list [ref=e89]:
          - listitem [ref=e90]:
            - link "(6) Polo" [ref=e91] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e92]: (6)
              - text: Polo
          - listitem [ref=e93]:
            - link "(5) H&M" [ref=e94] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e95]: (5)
              - text: H&M
          - listitem [ref=e96]:
            - link "(5) Madame" [ref=e97] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e98]: (5)
              - text: Madame
          - listitem [ref=e99]:
            - link "(3) Mast & Harbour" [ref=e100] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e101]: (3)
              - text: Mast & Harbour
          - listitem [ref=e102]:
            - link "(4) Babyhug" [ref=e103] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e104]: (4)
              - text: Babyhug
          - listitem [ref=e105]:
            - link "(3) Allen Solly Junior" [ref=e106] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e107]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e108]:
            - link "(3) Kookie Kids" [ref=e109] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e110]: (3)
              - text: Kookie Kids
          - listitem [ref=e111]:
            - link "(5) Biba" [ref=e112] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e113]: (5)
              - text: Biba
    - generic [ref=e114]:
      - generic [ref=e115]:
        - heading "Features Items" [level=2] [ref=e116]
        - generic [ref=e118]:
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img "ecommerce website products" [ref=e121]
              - heading "Rs. 500" [level=2] [ref=e122]
              - paragraph [ref=e123]: Blue Top
              - generic [ref=e124] [cursor=pointer]:
                - generic [ref=e125]: 
                - text: Add to cart
            - generic [ref=e126]:
              - heading "Rs. 500" [level=2] [ref=e127]
              - paragraph [ref=e128]: Blue Top
              - generic [ref=e129] [cursor=pointer]:
                - generic [ref=e130]: 
                - text: Add to cart
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link " View Product" [ref=e134] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e135]: 
                - text: View Product
        - generic [ref=e137]:
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img "ecommerce website products" [ref=e140]
              - heading "Rs. 400" [level=2] [ref=e141]
              - paragraph [ref=e142]: Men Tshirt
              - generic [ref=e143] [cursor=pointer]:
                - generic [ref=e144]: 
                - text: Add to cart
            - generic [ref=e145]:
              - heading "Rs. 400" [level=2] [ref=e146]
              - paragraph [ref=e147]: Men Tshirt
              - generic [ref=e148] [cursor=pointer]:
                - generic [ref=e149]: 
                - text: Add to cart
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link " View Product" [ref=e153] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e154]: 
                - text: View Product
        - generic [ref=e156]:
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img "ecommerce website products" [ref=e159]
              - heading "Rs. 1000" [level=2] [ref=e160]
              - paragraph [ref=e161]: Sleeveless Dress
              - generic [ref=e162] [cursor=pointer]:
                - generic [ref=e163]: 
                - text: Add to cart
            - generic [ref=e164]:
              - heading "Rs. 1000" [level=2] [ref=e165]
              - paragraph [ref=e166]: Sleeveless Dress
              - generic [ref=e167] [cursor=pointer]:
                - generic [ref=e168]: 
                - text: Add to cart
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link " View Product" [ref=e172] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e173]: 
                - text: View Product
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - img "ecommerce website products" [ref=e178]
              - heading "Rs. 1500" [level=2] [ref=e179]
              - paragraph [ref=e180]: Stylish Dress
              - generic [ref=e181] [cursor=pointer]:
                - generic [ref=e182]: 
                - text: Add to cart
            - generic [ref=e183]:
              - heading "Rs. 1500" [level=2] [ref=e184]
              - paragraph [ref=e185]: Stylish Dress
              - generic [ref=e186] [cursor=pointer]:
                - generic [ref=e187]: 
                - text: Add to cart
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link " View Product" [ref=e191] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e192]: 
                - text: View Product
        - generic [ref=e194]:
          - generic [ref=e195]:
            - generic [ref=e196]:
              - img "ecommerce website products" [ref=e197]
              - heading "Rs. 600" [level=2] [ref=e198]
              - paragraph [ref=e199]: Winter Top
              - generic [ref=e200] [cursor=pointer]:
                - generic [ref=e201]: 
                - text: Add to cart
            - generic [ref=e202]:
              - heading "Rs. 600" [level=2] [ref=e203]
              - paragraph [ref=e204]: Winter Top
              - generic [ref=e205] [cursor=pointer]:
                - generic [ref=e206]: 
                - text: Add to cart
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link " View Product" [ref=e210] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e211]: 
                - text: View Product
        - generic [ref=e213]:
          - generic [ref=e214]:
            - generic [ref=e215]:
              - img "ecommerce website products" [ref=e216]
              - heading "Rs. 400" [level=2] [ref=e217]
              - paragraph [ref=e218]: Summer White Top
              - generic [ref=e219] [cursor=pointer]:
                - generic [ref=e220]: 
                - text: Add to cart
            - generic [ref=e221]:
              - heading "Rs. 400" [level=2] [ref=e222]
              - paragraph [ref=e223]: Summer White Top
              - generic [ref=e224] [cursor=pointer]:
                - generic [ref=e225]: 
                - text: Add to cart
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link " View Product" [ref=e229] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e230]: 
                - text: View Product
        - generic [ref=e232]:
          - generic [ref=e233]:
            - generic [ref=e234]:
              - img "ecommerce website products" [ref=e235]
              - heading "Rs. 1000" [level=2] [ref=e236]
              - paragraph [ref=e237]: Madame Top For Women
              - generic [ref=e238] [cursor=pointer]:
                - generic [ref=e239]: 
                - text: Add to cart
            - generic [ref=e240]:
              - heading "Rs. 1000" [level=2] [ref=e241]
              - paragraph [ref=e242]: Madame Top For Women
              - generic [ref=e243] [cursor=pointer]:
                - generic [ref=e244]: 
                - text: Add to cart
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link " View Product" [ref=e248] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e249]: 
                - text: View Product
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]:
              - img "ecommerce website products" [ref=e254]
              - heading "Rs. 700" [level=2] [ref=e255]
              - paragraph [ref=e256]: Fancy Green Top
              - generic [ref=e257] [cursor=pointer]:
                - generic [ref=e258]: 
                - text: Add to cart
            - generic [ref=e259]:
              - heading "Rs. 700" [level=2] [ref=e260]
              - paragraph [ref=e261]: Fancy Green Top
              - generic [ref=e262] [cursor=pointer]:
                - generic [ref=e263]: 
                - text: Add to cart
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link " View Product" [ref=e267] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e268]: 
                - text: View Product
        - generic [ref=e270]:
          - generic [ref=e271]:
            - generic [ref=e272]:
              - img "ecommerce website products" [ref=e273]
              - heading "Rs. 499" [level=2] [ref=e274]
              - paragraph [ref=e275]: Sleeves Printed Top - White
              - generic [ref=e276] [cursor=pointer]:
                - generic [ref=e277]: 
                - text: Add to cart
            - generic [ref=e278]:
              - heading "Rs. 499" [level=2] [ref=e279]
              - paragraph [ref=e280]: Sleeves Printed Top - White
              - generic [ref=e281] [cursor=pointer]:
                - generic [ref=e282]: 
                - text: Add to cart
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link " View Product" [ref=e286] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e287]: 
                - text: View Product
        - generic [ref=e289]:
          - generic [ref=e290]:
            - generic [ref=e291]:
              - img "ecommerce website products" [ref=e292]
              - heading "Rs. 359" [level=2] [ref=e293]
              - paragraph [ref=e294]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e295] [cursor=pointer]:
                - generic [ref=e296]: 
                - text: Add to cart
            - generic [ref=e297]:
              - heading "Rs. 359" [level=2] [ref=e298]
              - paragraph [ref=e299]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e300] [cursor=pointer]:
                - generic [ref=e301]: 
                - text: Add to cart
          - list [ref=e303]:
            - listitem [ref=e304]:
              - link " View Product" [ref=e305] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e306]: 
                - text: View Product
        - generic [ref=e308]:
          - generic [ref=e309]:
            - generic [ref=e310]:
              - img "ecommerce website products" [ref=e311]
              - heading "Rs. 278" [level=2] [ref=e312]
              - paragraph [ref=e313]: Frozen Tops For Kids
              - generic [ref=e314] [cursor=pointer]:
                - generic [ref=e315]: 
                - text: Add to cart
            - generic [ref=e316]:
              - heading "Rs. 278" [level=2] [ref=e317]
              - paragraph [ref=e318]: Frozen Tops For Kids
              - generic [ref=e319] [cursor=pointer]:
                - generic [ref=e320]: 
                - text: Add to cart
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " View Product" [ref=e324] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e325]: 
                - text: View Product
        - generic [ref=e327]:
          - generic [ref=e328]:
            - generic [ref=e329]:
              - img "ecommerce website products" [ref=e330]
              - heading "Rs. 679" [level=2] [ref=e331]
              - paragraph [ref=e332]: Full Sleeves Top Cherry - Pink
              - generic [ref=e333] [cursor=pointer]:
                - generic [ref=e334]: 
                - text: Add to cart
            - generic [ref=e335]:
              - heading "Rs. 679" [level=2] [ref=e336]
              - paragraph [ref=e337]: Full Sleeves Top Cherry - Pink
              - generic [ref=e338] [cursor=pointer]:
                - generic [ref=e339]: 
                - text: Add to cart
          - list [ref=e341]:
            - listitem [ref=e342]:
              - link " View Product" [ref=e343] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e344]: 
                - text: View Product
        - generic [ref=e346]:
          - generic [ref=e347]:
            - generic [ref=e348]:
              - img "ecommerce website products" [ref=e349]
              - heading "Rs. 315" [level=2] [ref=e350]
              - paragraph [ref=e351]: Printed Off Shoulder Top - White
              - generic [ref=e352] [cursor=pointer]:
                - generic [ref=e353]: 
                - text: Add to cart
            - generic [ref=e354]:
              - heading "Rs. 315" [level=2] [ref=e355]
              - paragraph [ref=e356]: Printed Off Shoulder Top - White
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
          - list [ref=e360]:
            - listitem [ref=e361]:
              - link " View Product" [ref=e362] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e363]: 
                - text: View Product
        - generic [ref=e365]:
          - generic [ref=e366]:
            - generic [ref=e367]:
              - img "ecommerce website products" [ref=e368]
              - heading "Rs. 478" [level=2] [ref=e369]
              - paragraph [ref=e370]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e371] [cursor=pointer]:
                - generic [ref=e372]: 
                - text: Add to cart
            - generic [ref=e373]:
              - heading "Rs. 478" [level=2] [ref=e374]
              - paragraph [ref=e375]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
          - list [ref=e379]:
            - listitem [ref=e380]:
              - link " View Product" [ref=e381] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e382]: 
                - text: View Product
        - generic [ref=e384]:
          - generic [ref=e385]:
            - generic [ref=e386]:
              - img "ecommerce website products" [ref=e387]
              - heading "Rs. 1200" [level=2] [ref=e388]
              - paragraph [ref=e389]: Little Girls Mr. Panda Shirt
              - generic [ref=e390] [cursor=pointer]:
                - generic [ref=e391]: 
                - text: Add to cart
            - generic [ref=e392]:
              - heading "Rs. 1200" [level=2] [ref=e393]
              - paragraph [ref=e394]: Little Girls Mr. Panda Shirt
              - generic [ref=e395] [cursor=pointer]:
                - generic [ref=e396]: 
                - text: Add to cart
          - list [ref=e398]:
            - listitem [ref=e399]:
              - link " View Product" [ref=e400] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e401]: 
                - text: View Product
        - generic [ref=e403]:
          - generic [ref=e404]:
            - generic [ref=e405]:
              - img "ecommerce website products" [ref=e406]
              - heading "Rs. 1050" [level=2] [ref=e407]
              - paragraph [ref=e408]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e409] [cursor=pointer]:
                - generic [ref=e410]: 
                - text: Add to cart
            - generic [ref=e411]:
              - heading "Rs. 1050" [level=2] [ref=e412]
              - paragraph [ref=e413]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e414] [cursor=pointer]:
                - generic [ref=e415]: 
                - text: Add to cart
          - list [ref=e417]:
            - listitem [ref=e418]:
              - link " View Product" [ref=e419] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e420]: 
                - text: View Product
        - generic [ref=e422]:
          - generic [ref=e423]:
            - generic [ref=e424]:
              - img "ecommerce website products" [ref=e425]
              - heading "Rs. 1190" [level=2] [ref=e426]
              - paragraph [ref=e427]: Cotton Mull Embroidered Dress
              - generic [ref=e428] [cursor=pointer]:
                - generic [ref=e429]: 
                - text: Add to cart
            - generic [ref=e430]:
              - heading "Rs. 1190" [level=2] [ref=e431]
              - paragraph [ref=e432]: Cotton Mull Embroidered Dress
              - generic [ref=e433] [cursor=pointer]:
                - generic [ref=e434]: 
                - text: Add to cart
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link " View Product" [ref=e438] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e439]: 
                - text: View Product
        - generic [ref=e441]:
          - generic [ref=e442]:
            - generic [ref=e443]:
              - img "ecommerce website products" [ref=e444]
              - heading "Rs. 1530" [level=2] [ref=e445]
              - paragraph [ref=e446]: Blue Cotton Indie Mickey Dress
              - generic [ref=e447] [cursor=pointer]:
                - generic [ref=e448]: 
                - text: Add to cart
            - generic [ref=e449]:
              - heading "Rs. 1530" [level=2] [ref=e450]
              - paragraph [ref=e451]: Blue Cotton Indie Mickey Dress
              - generic [ref=e452] [cursor=pointer]:
                - generic [ref=e453]: 
                - text: Add to cart
          - list [ref=e455]:
            - listitem [ref=e456]:
              - link " View Product" [ref=e457] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e458]: 
                - text: View Product
        - generic [ref=e460]:
          - generic [ref=e461]:
            - generic [ref=e462]:
              - img "ecommerce website products" [ref=e463]
              - heading "Rs. 1600" [level=2] [ref=e464]
              - paragraph [ref=e465]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e466] [cursor=pointer]:
                - generic [ref=e467]: 
                - text: Add to cart
            - generic [ref=e468]:
              - heading "Rs. 1600" [level=2] [ref=e469]
              - paragraph [ref=e470]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e471] [cursor=pointer]:
                - generic [ref=e472]: 
                - text: Add to cart
          - list [ref=e474]:
            - listitem [ref=e475]:
              - link " View Product" [ref=e476] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e477]: 
                - text: View Product
        - generic [ref=e479]:
          - generic [ref=e480]:
            - generic [ref=e481]:
              - img "ecommerce website products" [ref=e482]
              - heading "Rs. 1100" [level=2] [ref=e483]
              - paragraph [ref=e484]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e485] [cursor=pointer]:
                - generic [ref=e486]: 
                - text: Add to cart
            - generic [ref=e487]:
              - heading "Rs. 1100" [level=2] [ref=e488]
              - paragraph [ref=e489]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e490] [cursor=pointer]:
                - generic [ref=e491]: 
                - text: Add to cart
          - list [ref=e493]:
            - listitem [ref=e494]:
              - link " View Product" [ref=e495] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e496]: 
                - text: View Product
        - generic [ref=e498]:
          - generic [ref=e499]:
            - generic [ref=e500]:
              - img "ecommerce website products" [ref=e501]
              - heading "Rs. 849" [level=2] [ref=e502]
              - paragraph [ref=e503]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e504] [cursor=pointer]:
                - generic [ref=e505]: 
                - text: Add to cart
            - generic [ref=e506]:
              - heading "Rs. 849" [level=2] [ref=e507]
              - paragraph [ref=e508]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e509] [cursor=pointer]:
                - generic [ref=e510]: 
                - text: Add to cart
          - list [ref=e512]:
            - listitem [ref=e513]:
              - link " View Product" [ref=e514] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e515]: 
                - text: View Product
        - generic [ref=e517]:
          - generic [ref=e518]:
            - generic [ref=e519]:
              - img "ecommerce website products" [ref=e520]
              - heading "Rs. 1299" [level=2] [ref=e521]
              - paragraph [ref=e522]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e523] [cursor=pointer]:
                - generic [ref=e524]: 
                - text: Add to cart
            - generic [ref=e525]:
              - heading "Rs. 1299" [level=2] [ref=e526]
              - paragraph [ref=e527]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e528] [cursor=pointer]:
                - generic [ref=e529]: 
                - text: Add to cart
          - list [ref=e531]:
            - listitem [ref=e532]:
              - link " View Product" [ref=e533] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e534]: 
                - text: View Product
        - generic [ref=e536]:
          - generic [ref=e537]:
            - generic [ref=e538]:
              - img "ecommerce website products" [ref=e539]
              - heading "Rs. 1000" [level=2] [ref=e540]
              - paragraph [ref=e541]: Green Side Placket Detail T-Shirt
              - generic [ref=e542] [cursor=pointer]:
                - generic [ref=e543]: 
                - text: Add to cart
            - generic [ref=e544]:
              - heading "Rs. 1000" [level=2] [ref=e545]
              - paragraph [ref=e546]: Green Side Placket Detail T-Shirt
              - generic [ref=e547] [cursor=pointer]:
                - generic [ref=e548]: 
                - text: Add to cart
          - list [ref=e550]:
            - listitem [ref=e551]:
              - link " View Product" [ref=e552] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e553]: 
                - text: View Product
        - generic [ref=e555]:
          - generic [ref=e556]:
            - generic [ref=e557]:
              - img "ecommerce website products" [ref=e558]
              - heading "Rs. 1500" [level=2] [ref=e559]
              - paragraph [ref=e560]: Premium Polo T-Shirts
              - generic [ref=e561] [cursor=pointer]:
                - generic [ref=e562]: 
                - text: Add to cart
            - generic [ref=e563]:
              - heading "Rs. 1500" [level=2] [ref=e564]
              - paragraph [ref=e565]: Premium Polo T-Shirts
              - generic [ref=e566] [cursor=pointer]:
                - generic [ref=e567]: 
                - text: Add to cart
          - list [ref=e569]:
            - listitem [ref=e570]:
              - link " View Product" [ref=e571] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e572]: 
                - text: View Product
        - generic [ref=e574]:
          - generic [ref=e575]:
            - generic [ref=e576]:
              - img "ecommerce website products" [ref=e577]
              - heading "Rs. 850" [level=2] [ref=e578]
              - paragraph [ref=e579]: Pure Cotton Neon Green Tshirt
              - generic [ref=e580] [cursor=pointer]:
                - generic [ref=e581]: 
                - text: Add to cart
            - generic [ref=e582]:
              - heading "Rs. 850" [level=2] [ref=e583]
              - paragraph [ref=e584]: Pure Cotton Neon Green Tshirt
              - generic [ref=e585] [cursor=pointer]:
                - generic [ref=e586]: 
                - text: Add to cart
          - list [ref=e588]:
            - listitem [ref=e589]:
              - link " View Product" [ref=e590] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e591]: 
                - text: View Product
        - generic [ref=e593]:
          - generic [ref=e594]:
            - generic [ref=e595]:
              - img "ecommerce website products" [ref=e596]
              - heading "Rs. 799" [level=2] [ref=e597]
              - paragraph [ref=e598]: Soft Stretch Jeans
              - generic [ref=e599] [cursor=pointer]:
                - generic [ref=e600]: 
                - text: Add to cart
            - generic [ref=e601]:
              - heading "Rs. 799" [level=2] [ref=e602]
              - paragraph [ref=e603]: Soft Stretch Jeans
              - generic [ref=e604] [cursor=pointer]:
                - generic [ref=e605]: 
                - text: Add to cart
          - list [ref=e607]:
            - listitem [ref=e608]:
              - link " View Product" [ref=e609] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e610]: 
                - text: View Product
        - generic [ref=e612]:
          - generic [ref=e613]:
            - generic [ref=e614]:
              - img "ecommerce website products" [ref=e615]
              - heading "Rs. 1200" [level=2] [ref=e616]
              - paragraph [ref=e617]: Regular Fit Straight Jeans
              - generic [ref=e618] [cursor=pointer]:
                - generic [ref=e619]: 
                - text: Add to cart
            - generic [ref=e620]:
              - heading "Rs. 1200" [level=2] [ref=e621]
              - paragraph [ref=e622]: Regular Fit Straight Jeans
              - generic [ref=e623] [cursor=pointer]:
                - generic [ref=e624]: 
                - text: Add to cart
          - list [ref=e626]:
            - listitem [ref=e627]:
              - link " View Product" [ref=e628] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e629]: 
                - text: View Product
        - generic [ref=e631]:
          - generic [ref=e632]:
            - generic [ref=e633]:
              - img "ecommerce website products" [ref=e634]
              - heading "Rs. 1400" [level=2] [ref=e635]
              - paragraph [ref=e636]: Grunt Blue Slim Fit Jeans
              - generic [ref=e637] [cursor=pointer]:
                - generic [ref=e638]: 
                - text: Add to cart
            - generic [ref=e639]:
              - heading "Rs. 1400" [level=2] [ref=e640]
              - paragraph [ref=e641]: Grunt Blue Slim Fit Jeans
              - generic [ref=e642] [cursor=pointer]:
                - generic [ref=e643]: 
                - text: Add to cart
          - list [ref=e645]:
            - listitem [ref=e646]:
              - link " View Product" [ref=e647] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e648]: 
                - text: View Product
        - generic [ref=e650]:
          - generic [ref=e651]:
            - generic [ref=e652]:
              - img "ecommerce website products" [ref=e653]
              - heading "Rs. 2300" [level=2] [ref=e654]
              - paragraph [ref=e655]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e656] [cursor=pointer]:
                - generic [ref=e657]: 
                - text: Add to cart
            - generic [ref=e658]:
              - heading "Rs. 2300" [level=2] [ref=e659]
              - paragraph [ref=e660]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e661] [cursor=pointer]:
                - generic [ref=e662]: 
                - text: Add to cart
          - list [ref=e664]:
            - listitem [ref=e665]:
              - link " View Product" [ref=e666] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e667]: 
                - text: View Product
        - generic [ref=e669]:
          - generic [ref=e670]:
            - generic [ref=e671]:
              - img "ecommerce website products" [ref=e672]
              - heading "Rs. 3000" [level=2] [ref=e673]
              - paragraph [ref=e674]: Cotton Silk Hand Block Print Saree
              - generic [ref=e675] [cursor=pointer]:
                - generic [ref=e676]: 
                - text: Add to cart
            - generic [ref=e677]:
              - heading "Rs. 3000" [level=2] [ref=e678]
              - paragraph [ref=e679]: Cotton Silk Hand Block Print Saree
              - generic [ref=e680] [cursor=pointer]:
                - generic [ref=e681]: 
                - text: Add to cart
          - list [ref=e683]:
            - listitem [ref=e684]:
              - link " View Product" [ref=e685] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e686]: 
                - text: View Product
        - generic [ref=e688]:
          - generic [ref=e689]:
            - generic [ref=e690]:
              - img "ecommerce website products" [ref=e691]
              - heading "Rs. 3500" [level=2] [ref=e692]
              - paragraph [ref=e693]: Rust Red Linen Saree
              - generic [ref=e694] [cursor=pointer]:
                - generic [ref=e695]: 
                - text: Add to cart
            - generic [ref=e696]:
              - heading "Rs. 3500" [level=2] [ref=e697]
              - paragraph [ref=e698]: Rust Red Linen Saree
              - generic [ref=e699] [cursor=pointer]:
                - generic [ref=e700]: 
                - text: Add to cart
          - list [ref=e702]:
            - listitem [ref=e703]:
              - link " View Product" [ref=e704] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e705]: 
                - text: View Product
        - generic [ref=e707]:
          - generic [ref=e708]:
            - generic [ref=e709]:
              - img "ecommerce website products" [ref=e710]
              - heading "Rs. 5000" [level=2] [ref=e711]
              - paragraph [ref=e712]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e713] [cursor=pointer]:
                - generic [ref=e714]: 
                - text: Add to cart
            - generic [ref=e715]:
              - heading "Rs. 5000" [level=2] [ref=e716]
              - paragraph [ref=e717]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e718] [cursor=pointer]:
                - generic [ref=e719]: 
                - text: Add to cart
          - list [ref=e721]:
            - listitem [ref=e722]:
              - link " View Product" [ref=e723] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e724]: 
                - text: View Product
        - generic [ref=e726]:
          - generic [ref=e727]:
            - generic [ref=e728]:
              - img "ecommerce website products" [ref=e729]
              - heading "Rs. 1400" [level=2] [ref=e730]
              - paragraph [ref=e731]: Lace Top For Women
              - generic [ref=e732] [cursor=pointer]:
                - generic [ref=e733]: 
                - text: Add to cart
            - generic [ref=e734]:
              - heading "Rs. 1400" [level=2] [ref=e735]
              - paragraph [ref=e736]: Lace Top For Women
              - generic [ref=e737] [cursor=pointer]:
                - generic [ref=e738]: 
                - text: Add to cart
          - list [ref=e740]:
            - listitem [ref=e741]:
              - link " View Product" [ref=e742] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e743]: 
                - text: View Product
        - generic [ref=e745]:
          - generic [ref=e746]:
            - generic [ref=e747]:
              - img "ecommerce website products" [ref=e748]
              - heading "Rs. 1389" [level=2] [ref=e749]
              - paragraph [ref=e750]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e751] [cursor=pointer]:
                - generic [ref=e752]: 
                - text: Add to cart
            - generic [ref=e753]:
              - heading "Rs. 1389" [level=2] [ref=e754]
              - paragraph [ref=e755]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e756] [cursor=pointer]:
                - generic [ref=e757]: 
                - text: Add to cart
          - list [ref=e759]:
            - listitem [ref=e760]:
              - link " View Product" [ref=e761] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e762]: 
                - text: View Product
      - generic [ref=e763]:
        - heading "recommended items" [level=2] [ref=e764]
        - generic [ref=e765]:
          - generic [ref=e766]:
            - text:   
            - generic:
              - generic [ref=e770]:
                - img "ecommerce website products" [ref=e771]
                - heading "Rs. 1500" [level=2] [ref=e772]
                - paragraph [ref=e773]: Stylish Dress
                - generic [ref=e774] [cursor=pointer]:
                  - generic [ref=e775]: 
                  - text: Add to cart
              - generic [ref=e779]:
                - img "ecommerce website products" [ref=e780]
                - heading "Rs. 600" [level=2] [ref=e781]
                - paragraph [ref=e782]: Winter Top
                - generic [ref=e783] [cursor=pointer]:
                  - generic [ref=e784]: 
                  - text: Add to cart
              - generic [ref=e788]:
                - img "ecommerce website products" [ref=e789]
                - heading "Rs. 400" [level=2] [ref=e790]
                - paragraph [ref=e791]: Summer White Top
                - generic [ref=e792] [cursor=pointer]:
                  - generic [ref=e793]: 
                  - text: Add to cart
          - link "" [ref=e794] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e795]: 
          - link "" [ref=e796] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
            - generic [ref=e797]: 
  - contentinfo [ref=e798]:
    - generic [ref=e803]:
      - heading "Subscription" [level=2] [ref=e804]
      - generic [ref=e805]:
        - textbox "Your email address" [ref=e806]
        - button "" [ref=e807] [cursor=pointer]:
          - generic [ref=e808]: 
        - paragraph [ref=e809]:
          - text: Get the most recent updates from
          - text: our site and be updated your self...
    - paragraph [ref=e813]: Copyright © 2021 All rights reserved
  - text: 
  - generic:
    - generic:
      - generic: 🎯 STRICT SEO AUDIT REPORT
      - generic: CẦN TỐI ƯU
    - generic:
      - strong: "Trang:"
      - text: Trang chủ (Home Page)
    - generic:
      - generic:
        - strong: 1. Title (50-60 ký tự)
        - generic: ❌
      - generic: Automation Exercise (19 ký tự)
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
      - generic: "Tìm thấy 3 thẻ: \"AutomationExercise\""
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