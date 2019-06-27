module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "./.storybook/tsconfig.json",
    },
  },
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "lib",
  ],
  setupFiles: ["./setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  testEnvironment: 'jsdom'
};