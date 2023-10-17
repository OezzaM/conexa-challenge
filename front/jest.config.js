const nextJest = require("next/jest");

const createJestConfig = nextJest({ dir: "./" });

/** @type {import("jest").Config} */
const customJestConfig = {
  setupFiles: ["<rootDir>/__mocks__/mocks.ts"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  preset: "ts-jest",
  globals: {
    "ts-jest": "tsconfig.jest.json",
  },
};

module.exports = createJestConfig(customJestConfig);