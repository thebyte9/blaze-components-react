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
    '@blaze-react/utils': '<rootDir>../Utils/src',
    '@blaze-react/button': '<rootDir>../Button/src',
    '@blaze-react/chips': '<rootDir>../Chips/src',
    '@blaze-react/input': '<rootDir>../Input/src',
    '@blaze-react/checkboxes': '<rootDir>../Checkboxes/src',
    '@blaze-react/select': '<rootDir>../Select/src',
    '@blaze-react/icon': '<rootDir>../Icon/src',
  },
};
