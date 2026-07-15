export interface SeoPageTestData {
  name: string;
  path: string;
  requireAuth?: boolean;
  expectIndexable?: boolean;
  checkSocialOg?: boolean;
  priority: string;
  severity: string;
}

export const seoTestData: SeoPageTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "critical",
    severity: "blocker"
  },
  {
    name: "Trang danh sách sản phẩm (Products Page)",
    path: "/products",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical"
  },
  {
    name: "Trang chi tiết sản phẩm (Product Details Page)",
    path: "/product_details/1",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "high",
    severity: "critical"
  },
  {
    name: "Trang giỏ hàng (Cart Page)",
    path: "/view_cart",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "high",
    severity: "critical"
  },
  {
    name: "Trang Đăng ký / Đăng nhập (Login/Signup Page)",
    path: "/login",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "critical",
    severity: "blocker"
  },
  {
    name: "Trang Liên hệ (Contact Us Page)",
    path: "/contact_us",
    expectIndexable: true,
    checkSocialOg: true,
    priority: "medium",
    severity: "normal"
  },
  {
    name: "Trang Test Cases (Test Cases Page)",
    path: "/test_cases",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "minor"
  },
  {
    name: "Trang danh sách API (API Testing Page)",
    path: "/api_list",
    expectIndexable: true,
    checkSocialOg: false,
    priority: "low",
    severity: "minor"
  },
  {
    name: "Trang thanh toán (Checkout Page)",
    path: "/checkout",
    requireAuth: true,
    expectIndexable: false,
    checkSocialOg: false,
    priority: "high",
    severity: "critical"
  }
];
