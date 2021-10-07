import type {Config} from '@jest/types';

import { resolve } from 'path';

const config: Config.InitialOptions = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  moduleDirectories: ['node_modules'],
  rootDir: '.',
  testMatch: ['./**/*.spec.ts'],
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['./src/**/*.(t|j)s', '!./node_modules/**'],
  coverageDirectory: './coverage/unit',
  testEnvironment: 'node',
  coverageReporters: ['json'],
  coveragePathIgnorePatterns: ['.module.ts$', '.spec.ts$', 'merge-coverage.ts'],
//   globalSetup: resolve('test/setup.ts'),
//   globalTeardown: resolve('test/teardown.ts'),
  testTimeout: 60000,
};

export default config;