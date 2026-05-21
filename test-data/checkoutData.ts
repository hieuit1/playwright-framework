export const checkoutData = {
  validCard: {
    nameOnCard: "Test User",
    cardNumber: "4100000000000",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2026",
  },
  // Invalid card data for negative tests
  shortCardNumber: {
    nameOnCard: "Test User",
    cardNumber: "4100",
    cvc: "123",
    expiryMonth: "12",
    expiryYear: "2026",
  },
  invalidCVC: {
    nameOnCard: "Test User",
    cardNumber: "4100000000000",
    cvc: "12",
    expiryMonth: "12",
    expiryYear: "2026",
  },
  expiredCard: {
    nameOnCard: "Test User",
    cardNumber: "4100000000000",
    cvc: "123",
    expiryMonth: "01",
    expiryYear: "2020",
  },
  invalidExpiryMonth: {
    nameOnCard: "Test User",
    cardNumber: "4100000000000",
    cvc: "123",
    expiryMonth: "13",
    expiryYear: "2026",
  },
  comment: "Please deliver between 9 AM - 5 PM",
};
