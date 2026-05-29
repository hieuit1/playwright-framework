// File: test-data/loginData.ts

export const validLoginData = {
  email: process.env.TEST_USER_EMAIL || "automationtesterpro@gmail.com",
  password: process.env.TEST_USER_PASSWORD || "123456",
};

export const invalidLoginCases = [
  {
    scenario: "incorrect password",
    email: validLoginData.email,
    password: "wrongpassword123",
    priority: "high",
    severity: "critical",
    assertionType: "ui_error",
  },
  {
    scenario: "non-existing email",
    email: `notexist${Date.now()}@gmail.com`,
    password: validLoginData.password,
    priority: "medium",
    severity: "normal",
    assertionType: "ui_error",
  },
  {
    scenario: "empty email and password",
    email: "",
    password: "",
    priority: "low",
    severity: "minor",
    assertionType: "form_block", // Lỗi bị form HTML5 chặn không cho submit
  },
  {
    scenario: "empty email",
    email: "",
    password: validLoginData.password,
    priority: "low",
    severity: "minor",
    assertionType: "form_block",
  },
  {
    scenario: "empty password",
    email: validLoginData.email,
    password: "",
    priority: "low",
    severity: "minor",
    assertionType: "form_block",
  },
  {
    scenario: "incorrect email format",
    email: "wrongemailformat",
    password: validLoginData.password,
    priority: "low",
    severity: "minor",
    assertionType: "form_block",
  },
];
