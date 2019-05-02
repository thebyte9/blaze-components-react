/* eslint-disable */
// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  collectCoverageFrom: ['src/**/*.js', '!src/**/*.stories.js'],
  testMatch: [
    '**/tests/**/*.test.js?(x)',
    '**/src/**/*.test.js?(x)'
  ],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  },
  roots: [
    'src/',
    'tests/',
  ],
  testEnvironment: 'jsdom',
  setupFiles: [
    './src/setupTests.js'
  ],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  verbose: false,
    transform: {
    '^.+\\.js$': 'babel-jest'
  },
};
