export default {
  projects: [
    {
      displayName: 'jest',
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
