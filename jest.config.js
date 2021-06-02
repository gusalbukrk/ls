export default {
  projects: [
    {
      displayName: 'jest',
      preset: 'ts-jest',
      globals: {
        'ts-jest': {
          tsconfig: 'tsconfig.jest.json',
        },
      },
      transform: {
        '^.+\\.jsx?$': 'babel-jest', // to also be able to write tests in javascript
        '^.+\\.tsx?$': 'ts-jest',
      },
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'eslint',
    },
  ],
  watchPlugins: ['jest-runner-eslint/watch-fix'],
  coverageProvider: 'v8',
  testEnvironment: 'node',
};
