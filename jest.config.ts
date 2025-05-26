module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [
    "src/admin/routes/dashboard/utils.ts",
    "!src/admin/routes/dashboard/components/GananciasChart.tsx",
    "!src/widgets/ProductWidget.tsx",
  ],
  testPathIgnorePatterns: [
    "/node_modules/", 
    "/integration-tests/"
  ],
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    }
  }
};
