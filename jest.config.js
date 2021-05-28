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
    '@blaze-react/button': '<rootDir>/packages/Button/src',
    '@blaze-react/chips': '<rootDir>/packages/Chips/src',
    '@blaze-react/input': '<rootDir>/packages/Input/src',
    '@blaze-react/checkboxes': '<rootDir>/packages/Checkboxes/src',
    '@blaze-react/select': '<rootDir>/packages/Checkboxes/src',
  },
};
