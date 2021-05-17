// lint-staged will automatically add any fix to the commit
// that's why the linting of test files is done here

module.exports = {
  '*.(js|jsx|cjs|ts|tsx)': `eslint --fix`, // including test files
  '*.md': 'prettier --write',
};
