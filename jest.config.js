const path = require('path');

module.exports = {
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/server.ts',
  ],
  coverageDirectory: '<rootDir>/test/coverage',
  coverageReporters: process.env.CI ? ['text'] : ['json', 'lcov', 'text', 'clover'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    }
  },
  moduleFileExtensions: [
    'json',
    'ts',
    'js',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^#/(.*)$': '<rootDir>/test/$1',
  },
  rootDir: path.resolve(__dirname),
  testEnvironment: 'node',
  testMatch: [
    '**/test/**/*.spec.(ts|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
