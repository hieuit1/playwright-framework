export interface PerformanceThresholds {
  ttfb: number;           // Time to First Byte (ms)
  fcp: number;            // First Contentful Paint (ms)
  domContentLoaded: number; // DOM Content Loaded Event (ms)
  loadTime: number;       // Window Load Event (ms)
}

export interface PerformanceTestData {
  name: string;
  path: string;
  requireAuth?: boolean;
  thresholds: PerformanceThresholds;
  priority: string;
  severity: string;
}

export const performanceTestData: PerformanceTestData[] = [
  {
    name: "Trang chủ (Home Page)",
    path: "/",
    thresholds: {
      ttfb: 1000,
      fcp: 2000,
      domContentLoaded: 2500,
      loadTime: 4500,
    },
    priority: "critical",
    severity: "blocker",
  },
  {
    name: "Trang danh sách sản phẩm (Products Page)",
    path: "/products",
    thresholds: {
      ttfb: 1000,
      fcp: 2000,
      domContentLoaded: 2500,
      loadTime: 4500,
    },
    priority: "high",
    severity: "critical",
  },
  {
    name: "Trang chi tiết sản phẩm (Product Details Page)",
    path: "/product_details/1",
    thresholds: {
      ttfb: 1000,
      fcp: 2000,
      domContentLoaded: 2500,
      loadTime: 4500,
    },
    priority: "high",
    severity: "critical",
  },
  {
    name: "Trang giỏ hàng (Cart Page)",
    path: "/view_cart",
    thresholds: {
      ttfb: 1000,
      fcp: 2000,
      domContentLoaded: 2500,
      loadTime: 4500,
    },
    priority: "high",
    severity: "critical",
  },
  {
    name: "Trang Đăng ký / Đăng nhập (Login/Signup Page)",
    path: "/login",
    thresholds: {
      ttfb: 1000,
      fcp: 2000,
      domContentLoaded: 2500,
      loadTime: 4500,
    },
    priority: "critical",
    severity: "blocker",
  },
  {
    name: "Trang Liên hệ (Contact Us Page)",
    path: "/contact_us",
    thresholds: {
      ttfb: 1200,
      fcp: 2200,
      domContentLoaded: 2800,
      loadTime: 5000,
    },
    priority: "medium",
    severity: "normal",
  },
  {
    name: "Trang thanh toán (Checkout Page)",
    path: "/checkout",
    requireAuth: true,
    thresholds: {
      ttfb: 1200,
      fcp: 2200,
      domContentLoaded: 2800,
      loadTime: 5000,
    },
    priority: "high",
    severity: "critical",
  },
];
