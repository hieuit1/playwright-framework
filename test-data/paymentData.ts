export const validPaymentData = {
  nameOnCard: "Test User", // Đã sửa để khớp với interface CardData
  cardNumber: "411111111111",
  cvc: "123",
  expiryMonth: "12",
  expiryYear: "2025",
};

export const invalidPaymentCases = [
  {
    scenario: "short card number",
    data: { ...validPaymentData, cardNumber: "4111" },
    priority: "high",
    severity: "critical",
  },
  {
    scenario: "invalid CVC",
    data: { ...validPaymentData, cvc: "1" },
    priority: "high",
    severity: "critical",
  },
  {
    scenario: "expired card",
    data: { ...validPaymentData, expiryYear: "2020" },
    priority: "high",
    severity: "critical",
  },
  {
    scenario: "invalid expiry month",
    data: { ...validPaymentData, expiryMonth: "13" },
    priority: "medium",
    severity: "normal",
  },
  {
    scenario: "empty card name",
    data: validPaymentData,
    clearField: "nameOnCard", // Cập nhật lại key cho khớp
    priority: "medium",
    severity: "normal",
  },
  {
    scenario: "empty card number",
    data: validPaymentData,
    clearField: "cardNumber",
    priority: "high",
    severity: "critical",
  },
  {
    scenario: "empty CVC",
    data: validPaymentData,
    clearField: "cvc",
    priority: "high",
    severity: "critical",
  },
];
