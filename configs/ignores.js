// Ignored file patterns for ESLint configuration
export default [
  'dist/**', // Ignore distribution files
  '.eslintrc.cjs', // Ignore the ESLint config file itself
  'node_modules/**', // Ignore node_modules directory
  'build/**', // Ignore build directories
  'coverage/**', // Ignore coverage reports
  '**/*.min.js', // Ignore minified JavaScript files
  '**/*.test.js', // Ignore test files
  '**/*.spec.js', // Ignore spec files
  '**/*.stories.js', // Ignore Storybook files
  '**/__mocks__/**', // Ignore mock files for testing
];
