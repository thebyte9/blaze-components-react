module.exports = {
    collectCoverageFrom: ['src/**/*.js', '!src/**/*.stories.js'],
    testMatch: [
        '**/tests/**/*.test.js?(x)',
        '**/src/**/*.test.js?(x)'
    ],
    collectCoverage: true,
    coverageDirectory: "./coverage/",
    verbose: false,
    setupFiles: [
        './src/setupTests.js'
    ],
    transform: {
        '^.+\\.js$': 'babel-jest'
    },
    testEnvironment: 'jsdom',
};
