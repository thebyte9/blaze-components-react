module.exports = {
  collectCoverageFrom: ['packages/**/*.js', '!packages/**/*.stories.js', '!packages/**/lib/*.js'],
  testMatch: ['**/__tests__/**/*.test.js?(x)'],
  roots: ['packages/'],
  testEnvironment: 'jsdom',
  setupFiles: ['./setupTests.js'],
  collectCoverage: true,
  coverageDirectory: './coverage/',
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
