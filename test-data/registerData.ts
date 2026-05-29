// File: test-data/registerData.ts

export const validRegisterData = {
  name: "Automation Tester",
  // Hàm sinh email động để mỗi lần chạy test Positive sẽ là 1 email mới hoàn toàn
  getUniqueEmail: () => `tester${Date.now()}@gmail.com`,
};

export const invalidRegisterCases = [
  {
    scenario: "existing email",
    name: "Tester",
    email: "test@gmail.com", // Thay bằng một email chắc chắn đã tồn tại trên hệ thống
    priority: "high",
    severity: "critical",
    assertionType: "ui_error", // Loại lỗi hiện chữ đỏ
  },
  {
    scenario: "empty name",
    name: "",
    email: `test${Date.now()}@gmail.com`,
    priority: "low",
    severity: "minor",
    assertionType: "form_block", // Lỗi HTML5 chặn submit form
  },
  {
    scenario: "empty email",
    name: "Tester",
    email: "",
    priority: "low",
    severity: "minor",
    assertionType: "form_block",
  },
  {
    scenario: "incorrect email format",
    name: "Tester",
    email: "wrongemailformat.com",
    priority: "low",
    severity: "minor",
    assertionType: "form_block",
  },
];
