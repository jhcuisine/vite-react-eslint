// configs/recommendedConfigs.js
import eslint from '@eslint/js';
import markdown from 'eslint-plugin-markdown';
import oxlint from 'eslint-plugin-oxlint';

// Export an object containing all recommended configurations
export default {
  markdownConfig: markdown.configs.recommended,
  eslintConfig: eslint.configs.recommended,
  oxlintConfig: oxlint.configs['flat/recommended'],
};
