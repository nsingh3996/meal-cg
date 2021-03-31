module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,vue}',
    '!**/node_modules/**',
    '!**/*.config-js',
    '!**/vendor/**',
    '!**/main.js',
    '!**/coverage/**'
  ],
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 50,
      lines: 50,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
};
