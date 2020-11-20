module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsConfig: "./.typescript/tsconfig.json",
    },
  },
  testRegex: "(src/__tests__/.*|(\\.|/)(test|spec))\\.(tsx?)$",
  testPathIgnorePatterns: [
    "/node_modules/",
    "lib",
  ],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each'
  ],
  transformIgnorePatterns: [
    "node_modules\/(?!(monaco-editor)\/)"
 ],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "<rootDir>/packages/__mocks__/styles.mock.js",
  },
  setupFiles: ["./.typescript/setupTests.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  setupFilesAfterEnv: [
    '@testing-library/react/cleanup-after-each'
  ],
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  coverageDirectory: "./coverage/",
  collectCoverage: true,
  testEnvironment: 'jsdom'
};