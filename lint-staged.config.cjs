module.exports = {
  '*.(js|jsx|cjs|ts|tsx)': `eslint --cache --fix --ignore-pattern "**/*.spec.js" --ignore-pattern "**/*.spec.jsx" --ignore-pattern "**/__tests__/**" --ignore-pattern '!.*.cjs'`,
};
