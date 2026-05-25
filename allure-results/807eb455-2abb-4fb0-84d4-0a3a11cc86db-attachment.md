# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: register.spec.ts >> Register Feature Tests >> Register fails with number as name
- Location: tests\register.spec.ts:94:9

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /.*login/
Received string:  "https://automationexercise.com/signup"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × unexpected value "https://automationexercise.com/signup"

```

```yaml
- banner:
  - link "Website for practice automation":
    - /url: /
    - img "Website for practice automation"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Enter Account Information" [level=2]
- text: Title
- radio "Mr."
- text: Mr.
- radio "Mrs."
- text: Mrs. Name
- superscript: "*"
- textbox "Name *": "123456789"
- text: Email
- superscript: "*"
- textbox "Email *" [disabled]: test1779673428147@gmail.com
- text: Password
- superscript: "*"
- textbox "Password *"
- text: Date of Birth
- combobox:
  - option "Day" [selected]
  - option "1"
  - option "2"
  - option "3"
  - option "4"
  - option "5"
  - option "6"
  - option "7"
  - option "8"
  - option "9"
  - option "10"
  - option "11"
  - option "12"
  - option "13"
  - option "14"
  - option "15"
  - option "16"
  - option "17"
  - option "18"
  - option "19"
  - option "20"
  - option "21"
  - option "22"
  - option "23"
  - option "24"
  - option "25"
  - option "26"
  - option "27"
  - option "28"
  - option "29"
  - option "30"
  - option "31"
- combobox:
  - option "Month" [selected]
  - option "January"
  - option "February"
  - option "March"
  - option "April"
  - option "May"
  - option "June"
  - option "July"
  - option "August"
  - option "September"
  - option "October"
  - option "November"
  - option "December"
- combobox:
  - option "Year" [selected]
  - option "2021"
  - option "2020"
  - option "2019"
  - option "2018"
  - option "2017"
  - option "2016"
  - option "2015"
  - option "2014"
  - option "2013"
  - option "2012"
  - option "2011"
  - option "2010"
  - option "2009"
  - option "2008"
  - option "2007"
  - option "2006"
  - option "2005"
  - option "2004"
  - option "2003"
  - option "2002"
  - option "2001"
  - option "2000"
  - option "1999"
  - option "1998"
  - option "1997"
  - option "1996"
  - option "1995"
  - option "1994"
  - option "1993"
  - option "1992"
  - option "1991"
  - option "1990"
  - option "1989"
  - option "1988"
  - option "1987"
  - option "1986"
  - option "1985"
  - option "1984"
  - option "1983"
  - option "1982"
  - option "1981"
  - option "1980"
  - option "1979"
  - option "1978"
  - option "1977"
  - option "1976"
  - option "1975"
  - option "1974"
  - option "1973"
  - option "1972"
  - option "1971"
  - option "1970"
  - option "1969"
  - option "1968"
  - option "1967"
  - option "1966"
  - option "1965"
  - option "1964"
  - option "1963"
  - option "1962"
  - option "1961"
  - option "1960"
  - option "1959"
  - option "1958"
  - option "1957"
  - option "1956"
  - option "1955"
  - option "1954"
  - option "1953"
  - option "1952"
  - option "1951"
  - option "1950"
  - option "1949"
  - option "1948"
  - option "1947"
  - option "1946"
  - option "1945"
  - option "1944"
  - option "1943"
  - option "1942"
  - option "1941"
  - option "1940"
  - option "1939"
  - option "1938"
  - option "1937"
  - option "1936"
  - option "1935"
  - option "1934"
  - option "1933"
  - option "1932"
  - option "1931"
  - option "1930"
  - option "1929"
  - option "1928"
  - option "1927"
  - option "1926"
  - option "1925"
  - option "1924"
  - option "1923"
  - option "1922"
  - option "1921"
  - option "1920"
  - option "1919"
  - option "1918"
  - option "1917"
  - option "1916"
  - option "1915"
  - option "1914"
  - option "1913"
  - option "1912"
  - option "1911"
  - option "1910"
  - option "1909"
  - option "1908"
  - option "1907"
  - option "1906"
  - option "1905"
  - option "1904"
  - option "1903"
  - option "1902"
  - option "1901"
  - option "1900"
- checkbox "Sign up for our newsletter!"
- text: Sign up for our newsletter!
- checkbox "Receive special offers from our partners!"
- text: Receive special offers from our partners!
- heading "Address Information" [level=2]
- paragraph:
  - text: First name
  - superscript: "*"
  - textbox "First name *"
- paragraph:
  - text: Last name
  - superscript: "*"
  - textbox "Last name *"
- paragraph:
  - text: Company
  - textbox "Company"
- paragraph:
  - text: Address
  - superscript: "*"
  - text: (Street address, P.O. Box, Company name, etc.)
  - textbox "Address * (Street address, P.O. Box, Company name, etc.)"
- paragraph:
  - text: Address 2
  - textbox "Address 2"
- paragraph:
  - text: Country
  - superscript: "*"
  - combobox "Country *":
    - option "India" [selected]
    - option "United States"
    - option "Canada"
    - option "Australia"
    - option "Israel"
    - option "New Zealand"
    - option "Singapore"
- paragraph:
  - text: State
  - superscript: "*"
  - textbox "State *"
- paragraph:
  - text: City
  - superscript: "*"
  - textbox "City * Zipcode *"
- paragraph:
  - text: Zipcode
  - superscript: "*"
  - textbox
- paragraph:
  - text: Mobile Number
  - superscript: "*"
  - textbox "Mobile Number *"
- button "Create Account"
- insertion:
  - iframe
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
  6   | test.describe('Register Feature Tests', () => {
  7   | 
  8   |     // Positive case: Đăng ký thành công
  9   |     test('Register successfully', {
  10  |         tag: ['@register', '@priority:critical'],
  11  |         annotation: [{ type: 'severity', description: 'blocker' }]
  12  |     }, async ({ page }) => {
  13  |         const registerPage = new RegisterPage(page);
  14  |         const accountInfoPage = new AccountInfoPage(page);
  15  | 
  16  |         // Step 1: Nhập thông tin đăng ký cơ bản
  17  |         await registerPage.gotoRegisterPage();
  18  |         await registerPage.signup('hieu', `test${Date.now()}@gmail.com`);
  19  | 
  20  |         // Step 2: Điền thông tin tài khoản chi tiết
  21  |         await accountInfoPage.fillAccountInformation();
  22  |         await accountInfoPage.clickCreateAccount();
  23  | 
  24  |         // Kiểm tra kết quả
  25  |         await expect(page.locator('[data-qa="account-created"]')).toContainText('Account Created!');
  26  |     });
  27  | 
  28  |     // Negative case: Đăng ký với email đã tồn tại
  29  |     test('Register fails when email already exists', {
  30  |         tag: ['@register', '@priority:high'],
  31  |         annotation: [{ type: 'severity', description: 'critical' }]
  32  |     }, async ({ page }) => {
  33  |         const registerPage = new RegisterPage(page);
  34  |         
  35  |         await registerPage.gotoRegisterPage();
  36  |         
  37  |         // Sử dụng dữ liệu existingUser từ file test-data
  38  |         await registerPage.signup(
  39  |             registerData.existingUser.name, 
  40  |             registerData.existingUser.email
  41  |         );
  42  | 
  43  |         // Kiểm tra thông báo lỗi xuất hiện
  44  |         await expect(page.locator(registerPage.existingEmailMessage)).toBeVisible();
  45  |     });
  46  | 
  47  |     // Negative case: Đăng ký nhưng bỏ trống trường Tên (Name)
  48  |     test('Register fails with empty name', {
  49  |         tag: ['@register', '@priority:low'],
  50  |         annotation: [{ type: 'severity', description: 'minor' }]
  51  |     }, async ({ page }) => {
  52  |         const registerPage = new RegisterPage(page);
  53  |         await registerPage.gotoRegisterPage();
  54  |         
  55  |         // Bỏ trống trường Tên, chỉ nhập Email
  56  |         await registerPage.signup('', `test${Date.now()}@gmail.com`);
  57  | 
  58  |         // Hệ thống sẽ không cho submit (do HTML5 validation).
  59  |         // URL vẫn giữ nguyên là '/login', không chuyển qua trang điền thông tin chi tiết.
  60  |         await expect(page).toHaveURL(/.*login/);
  61  |     });
  62  | 
  63  |     // Negative case: Đăng ký nhưng bỏ trống trường Email
  64  |     test('Register fails with empty email', {
  65  |         tag: ['@register', '@priority:low'],
  66  |         annotation: [{ type: 'severity', description: 'minor' }]
  67  |     }, async ({ page }) => {
  68  |         const registerPage = new RegisterPage(page);
  69  |         await registerPage.gotoRegisterPage();
  70  |         
  71  |         // Nhập trường Tên, bỏ trống trường Email
  72  |         await registerPage.signup('hieu', '');
  73  | 
  74  |         // Form HTML5 chặn submit, nên trang không đổi
  75  |         await expect(page).toHaveURL(/.*login/);
  76  |     });
  77  | 
  78  |     // Negative case: Đăng ký nhưng bỏ trống cả Tên và Email
  79  |     test('Register fails with empty name and email', {
  80  |         tag: ['@register', '@priority:low'],
  81  |         annotation: [{ type: 'severity', description: 'minor' }]
  82  |     }, async ({ page }) => {
  83  |         const registerPage = new RegisterPage(page);
  84  |         await registerPage.gotoRegisterPage();
  85  |         
  86  |         // Bỏ trống cả 2 trường
  87  |         await registerPage.signup('', '');
  88  | 
  89  |         // Form bị chặn submit
  90  |         await expect(page).toHaveURL(/.*login/);
  91  |     });
  92  | 
  93  |     // Negative case: Đăng ký với Tên chỉ chứa số
  94  |     test('Register fails with number as name', {
  95  |         tag: ['@register', '@priority:low'],
  96  |         annotation: [{ type: 'severity', description: 'minor' }]
  97  |     }, async ({ page }) => {
  98  |         const registerPage = new RegisterPage(page);
  99  |         await registerPage.gotoRegisterPage();
  100 |         
  101 |         // Nhập số vào trường Tên
  102 |         await registerPage.signup('123456789', `test${Date.now()}@gmail.com`);
  103 | 
  104 |         // Giả sử logic nghiệp vụ không cho phép tên là số, việc đăng ký phải bị chặn
  105 |         // (Nếu website thực tế cho phép, test này sẽ báo fail để lập trình viên kiểm tra lại logic)
> 106 |         await expect(page).toHaveURL(/.*login/);
      |                            ^ Error: expect(page).toHaveURL(expected) failed
  107 |     });
  108 | 
  109 |     // Negative case: Đăng ký với Email sai định dạng
  110 |     test('Register fails with incorrect email format', {
  111 |         tag: ['@register', '@priority:low'],
  112 |         annotation: [{ type: 'severity', description: 'minor' }]
  113 |     }, async ({ page }) => {
  114 |         const registerPage = new RegisterPage(page);
  115 |         await registerPage.gotoRegisterPage();
  116 |         
  117 |         // Nhập email không có ký tự '@'
  118 |         await registerPage.signup('hieu', 'wrongemailformat.com');
  119 | 
  120 |         // Form HTML5 (type="email") sẽ chặn submit
  121 |         await expect(page).toHaveURL(/.*login/);
  122 |     });
  123 | });
```