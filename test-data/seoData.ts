export interface SeoPageTestData {
  name: string;
  path: string;
  requireAuth?: boolean;
  expectIndexable?: boolean;
  checkSocialOg?: boolean;
}

export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    expectIndexable: true,
    checkSocialOg: true
  },
  {
    name: "Trang danh sách sản phẩm (Products Page)",
    path: "/products",
    expectIndexable: true,
    checkSocialOg: true
  },
  {
    name: "Trang chi tiết sản phẩm (Product Details Page)",
    path: "/product_details/1",
    expectIndexable: true,
    checkSocialOg: true
  },
  {
    name: "Trang giỏ hàng (Cart Page)",
    path: "/view_cart",
    expectIndexable: true, // Trang web demo này để indexable hoặc tuỳ chỉnh theo dự án
    checkSocialOg: false
  },
  {
    name: "Trang Đăng ký / Đăng nhập (Login/Signup Page)",
    path: "/login",
    expectIndexable: true,
    checkSocialOg: true
  },
  {
    name: "Trang Liên hệ (Contact Us Page)",
    path: "/contact_us",
    expectIndexable: true,
    checkSocialOg: true
  },
  {
    name: "Trang Test Cases (Test Cases Page)",
    path: "/test_cases",
    expectIndexable: true,
    checkSocialOg: false
  },
  {
    name: "Trang danh sách API (API Testing Page)",
    path: "/api_list",
    expectIndexable: true,
    checkSocialOg: false
  },
  {
    name: "Trang thanh toán (Checkout Page)",
    path: "/checkout",
    requireAuth: true,
    expectIndexable: false,
    checkSocialOg: false
  }
];
