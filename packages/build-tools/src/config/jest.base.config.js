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
      branches: 30,
      functions: 30,
      lines: 30,
      statements: 30,
    },
  },
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '@blaze-react/utils': '<rootDir>../Utils/src',
    '@blaze-react/button': '<rootDir>../Button/src',
    '@blaze-react/chips': '<rootDir>../Chips/src',
    '@blaze-react/input': '<rootDir>../Input/src',
    '@blaze-react/checkboxes': '<rootDir>../Checkboxes/src',
    '@blaze-react/select': '<rootDir>../Checkboxes/src',
  },
};
