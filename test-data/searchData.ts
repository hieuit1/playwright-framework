// File: test-data/searchData.ts

export const searchTestCases = [
  {
    testName: "Search for an existing product successfully",
    story: "Search Existing Product",
    keyword: "Blue Top",
    hasResults: true,
    expectedKeywordInName: "blue",
    checkTitle: true, // Hiển thị "SEARCHED PRODUCTS"
    priority: "high",
    severity: "critical",
  },
  {
    testName: "Search for a non-existing product",
    story: "Search Non-Existing Product",
    keyword: "InvalidProductXYZ123",
    hasResults: false,
    expectedKeywordInName: null,
    checkTitle: true,
    priority: "medium",
    severity: "normal",
  },
  {
    testName: "Search with empty keyword",
    story: "Search With Empty Keyword",
    keyword: "",
    hasResults: true,
    expectedKeywordInName: null,
    checkTitle: false, // Ở code cũ, test case empty không check title này
    priority: "low",
    severity: "minor",
  },
];
