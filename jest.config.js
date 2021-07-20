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
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  moduleNameMapper: {
    '@blaze-react/utils': '<rootDir>/packages/Utils/src',
    '@blaze-react/button': '<rootDir>/packages/Button/src',
    '@blaze-react/chips': '<rootDir>/packages/Chips/src',
    '@blaze-react/input': '<rootDir>/packages/Input/src',
    '@blaze-react/checkboxes': '<rootDir>/packages/Checkboxes/src',
    '@blaze-react/select': '<rootDir>/packages/Select/src',
    '@blaze-react/themes': '<rootDir>/packages/themes/src',
    '@blaze-react/icon': '<rootDir>/packages/icon/src',
  },
};
