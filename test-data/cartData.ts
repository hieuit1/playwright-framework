export const cartTestConfig = {
  bulkQuantity: "20",
  singleQuantity: "1",
};

export const cartQuantityCases = [
  {
    scenario: "add exactly 1 item",
    quantity: "1",
    priority: "high",
    severity: "critical",
  },
  {
    scenario: "add bulk items (4 items)",
    quantity: "4",
    priority: "medium",
    severity: "normal",
  },
];

export const cartRemovalCases = [
  {
    scenario: "remove the only item in cart",
    expectedCartEmpty: true,
    priority: "high",
    severity: "critical",
  },
];
