module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/', '/mocks/'],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 60,
      lines: 75,
      statements: 60,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
};
