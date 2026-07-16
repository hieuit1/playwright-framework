# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/performance.spec.ts >> Performance Optimization Feature Tests >> Kiểm tra hiệu năng tải trang: Trang chủ (Home Page)
- Location: tests/web/performance.spec.ts:15:9

# Error details

```
Error: Lỗi Hiệu năng: TTFB đo được là 1086ms. Vượt ngưỡng tối đa cho phép là 1000ms.

expect(received).toBeLessThanOrEqual(expected)

Expected: <= 1000
Received:    1086
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
      - generic: ⚡ WEB PERFORMANCE REPORT
      - generic: CẦN TỐI ƯU
    - generic:
      - strong: "Trang:"
      - text: Trang chủ (Home Page)
    - generic:
      - generic:
        - strong: 1. TTFB (Time to First Byte)
        - generic: ❌
      - generic:
        - generic: "Thực tế: 1086 ms"
        - generic: "Giới hạn: 1000 ms"
      - generic: 📌 Thời gian phản hồi đầu tiên từ Server.
    - generic:
      - generic:
        - strong: 2. FCP (First Contentful Paint)
        - generic: ✅
      - generic:
        - generic: "Thực tế: 1280 ms"
        - generic: "Giới hạn: 2000 ms"
      - generic: 📌 Thời gian vẽ phần tử nội dung đầu tiên lên màn hình.
    - generic:
      - generic:
        - strong: 3. DOM Content Loaded
        - generic: ✅
      - generic:
        - generic: "Thực tế: 1338 ms"
        - generic: "Giới hạn: 2500 ms"
      - generic: 📌 Thời gian tải xong cấu trúc cây thư mục DOM HTML.
    - generic:
      - generic:
        - strong: 4. Window Load Time
        - generic: ✅
      - generic:
        - generic: "Thực tế: 1801 ms"
        - generic: "Giới hạn: 4500 ms"
      - generic: 📌 Tổng thời gian trang web tải hoàn tất toàn bộ tài nguyên.
```

# Test source

```ts
  6   |   // ==================== METHODS ====================
  7   | 
  8   |   // Thu thập các chỉ số hiệu năng thông qua Navigation và Paint Timing API của trình duyệt
  9   |   async scanPerformanceMetrics() {
  10  |     // Chờ cho đến khi toàn bộ tài nguyên trang được load xong hoàn toàn
  11  |     await this.page.waitForLoadState("load");
  12  | 
  13  |     return await this.page.evaluate(() => {
  14  |       // 1. Lấy thông tin từ Navigation Timing API
  15  |       const [navigationEntry] = performance.getEntriesByType("navigation") as any[];
  16  |       if (!navigationEntry) {
  17  |         return {
  18  |           ttfb: 0,
  19  |           domContentLoaded: 0,
  20  |           loadTime: 0,
  21  |           fcp: 0
  22  |         };
  23  |       }
  24  | 
  25  |       const ttfb = Math.round(navigationEntry.responseStart - navigationEntry.requestStart);
  26  |       const domContentLoaded = Math.round(navigationEntry.domContentLoadedEventEnd - navigationEntry.startTime);
  27  |       const loadTime = Math.round(navigationEntry.loadEventEnd - navigationEntry.startTime);
  28  | 
  29  |       // 2. Lấy thông tin FCP (First Contentful Paint) từ Paint Timing API
  30  |       const paintEntries = performance.getEntriesByType("paint");
  31  |       const fcpEntry = paintEntries.find(entry => entry.name === "first-contentful-paint");
  32  |       const fcp = fcpEntry ? Math.round(fcpEntry.startTime) : 0;
  33  | 
  34  |       return { ttfb, domContentLoaded, loadTime, fcp };
  35  |     });
  36  |   }
  37  | 
  38  |   // Chèn giao diện HUD (Báo cáo Hiệu năng) trực quan lên DOM để chụp ảnh
  39  |   async injectVisualPerformanceReport(pageName: string, metrics: any, thresholds: any) {
  40  |     await this.page.evaluate(({ pageName, metrics, thresholds }) => {
  41  |       const oldCard = document.getElementById("perf-report-card");
  42  |       if (oldCard) oldCard.remove();
  43  | 
  44  |       const container = document.createElement("div");
  45  |       container.id = "perf-report-card";
  46  | 
  47  |       container.style.position = "fixed";
  48  |       container.style.top = "10px";
  49  |       container.style.right = "10px";
  50  |       container.style.width = "480px";
  51  |       container.style.backgroundColor = "rgba(15, 23, 42, 0.98)";
  52  |       container.style.color = "#f8fafc";
  53  |       container.style.borderRadius = "12px";
  54  |       container.style.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.5)";
  55  |       container.style.fontFamily = "system-ui, sans-serif";
  56  |       container.style.padding = "20px";
  57  |       container.style.zIndex = "9999999";
  58  |       container.style.pointerEvents = "none";
  59  |       container.style.maxHeight = "95vh";
  60  |       container.style.overflowY = "auto";
  61  |       container.style.lineHeight = "1.4";
  62  | 
  63  |       const isTtfbPass = metrics.ttfb <= thresholds.ttfb;
  64  |       const isFcpPass = metrics.fcp <= thresholds.fcp;
  65  |       const isDomPass = metrics.domContentLoaded <= thresholds.domContentLoaded;
  66  |       const isLoadPass = metrics.loadTime <= thresholds.loadTime;
  67  | 
  68  |       const allPass = isTtfbPass && isFcpPass && isDomPass && isLoadPass;
  69  | 
  70  |       container.style.border = `2px solid ${allPass ? '#22c55e' : '#ef4444'}`;
  71  | 
  72  |       const renderRow = (label: string, actual: number, limit: number, isPass: boolean, detail: string) => `
  73  |         <div style="background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 6px; border-left: 4px solid ${isPass ? '#22c55e' : '#ef4444'}; margin-bottom: 8px;">
  74  |           <div style="display: flex; justify-content: space-between; margin-bottom: 2px; align-items: center;">
  75  |             <strong style="color: #cbd5e1; font-size: 13px;">${label}</strong>
  76  |             <span style="font-size: 14px;">${isPass ? '✅' : '❌'}</span>
  77  |           </div>
  78  |           <div style="display: flex; justify-content: space-between; color: ${isPass ? '#4ade80' : '#f87171'}; font-size: 12px; font-weight: bold; margin-bottom: 2px;">
  79  |             <span>Thực tế: ${actual} ms</span>
  80  |             <span style="color: #94a3b8; font-weight: normal;">Giới hạn: ${limit} ms</span>
  81  |           </div>
  82  |           <div style="color: #94a3b8; font-size: 11px;">📌 ${detail}</div>
  83  |         </div>
  84  |       `;
  85  | 
  86  |       container.innerHTML = `
  87  |         <div style="font-weight: bold; font-size: 15px; margin-bottom: 12px; border-bottom: 1px solid #334155; padding-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
  88  |           <span>⚡ WEB PERFORMANCE REPORT</span>
  89  |           <span style="color: ${allPass ? '#22c55e' : '#ef4444'}; font-size: 12px; font-weight: bold;">${allPass ? 'TỐI ƯU' : 'CẦN TỐI ƯU'}</span>
  90  |         </div>
  91  |         <div style="font-size: 12px; margin-bottom: 12px; color: #94a3b8;">
  92  |           <strong>Trang:</strong> <span style="color: #60a5fa;">${pageName}</span>
  93  |         </div>
  94  |         ${renderRow("1. TTFB (Time to First Byte)", metrics.ttfb, thresholds.ttfb, isTtfbPass, "Thời gian phản hồi đầu tiên từ Server.")}
  95  |         ${renderRow("2. FCP (First Contentful Paint)", metrics.fcp, thresholds.fcp, isFcpPass, "Thời gian vẽ phần tử nội dung đầu tiên lên màn hình.")}
  96  |         ${renderRow("3. DOM Content Loaded", metrics.domContentLoaded, thresholds.domContentLoaded, isDomPass, "Thời gian tải xong cấu trúc cây thư mục DOM HTML.")}
  97  |         ${renderRow("4. Window Load Time", metrics.loadTime, thresholds.loadTime, isLoadPass, "Tổng thời gian trang web tải hoàn tất toàn bộ tài nguyên.")}
  98  |       `;
  99  |       document.body.appendChild(container);
  100 |     }, { pageName, metrics, thresholds });
  101 |   }
  102 | 
  103 |   // ==================== ASSERTIONS ====================
  104 | 
  105 |   async verifyTTFB(actual: number, limit: number) {
> 106 |     expect.soft(actual, `Lỗi Hiệu năng: TTFB đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
      |                                                                                                                   ^ Error: Lỗi Hiệu năng: TTFB đo được là 1086ms. Vượt ngưỡng tối đa cho phép là 1000ms.
  107 |   }
  108 | 
  109 |   async verifyFCP(actual: number, limit: number) {
  110 |     expect.soft(actual, `Lỗi Hiệu năng: FCP đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  111 |   }
  112 | 
  113 |   async verifyDOMContentLoaded(actual: number, limit: number) {
  114 |     expect.soft(actual, `Lỗi Hiệu năng: DOMContentLoaded đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  115 |   }
  116 | 
  117 |   async verifyLoadTime(actual: number, limit: number) {
  118 |     expect.soft(actual, `Lỗi Hiệu năng: Window Load Time đo được là ${actual}ms. Vượt ngưỡng tối đa cho phép là ${limit}ms.`).toBeLessThanOrEqual(limit);
  119 |   }
  120 | }
  121 | 
```