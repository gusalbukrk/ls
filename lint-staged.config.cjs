// lint-staged will automatically add any fix to the commit
// that's why the linting of test files is done here
// husky will execute jest soon after, but without eslint (see '.husky/pre-commit', line 5)

module.exports = {
  '*.(js|cjs|json)': 'npm run lint:config',
  '*.(js|jsx|ts|tsx|json)': `eslint --fix`,

  // json needs to be included here because eslint doesn't remove multiple blank lines in json files, prettier do
  '*.(md|json)': 'prettier --write',
};
