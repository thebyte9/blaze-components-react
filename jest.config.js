module.exports = {
  roots: ['<rootDir>'],
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
      branches: 40,
      functions: 60,
      lines: 60,
      statements: 60,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '@blaze-react/utils': '<rootDir>/packages/Utils/src',
  },
};
