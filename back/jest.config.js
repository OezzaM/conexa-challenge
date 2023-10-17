module.exports = {
  rootDir: 'src',
  testRegex: '.*\\.spec\\.ts$',
  coverageDirectory: '../coverage',
  modulePaths: ['<rootDir>/src', '<rootDir>/node_modules'],
  testPathIgnorePatterns: ['.git/.*', 'node_modules/.*'],
  transformIgnorePatterns: ['node_modules/.*', '.*\\.js'],
  testEnvironment: 'node',
  coverageReporters: ['json', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s', '!test/**'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },
  coveragePathIgnorePatterns: [
    'src/entities/',
    'src/constants/',
    'src/test/',
    '.module.ts',
    '.dto.ts',
    'src/main.ts',
    'src/app.module.ts',
  ],
  setupFiles: [],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    },
  },
};
