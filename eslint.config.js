import files from './configs/files.js'; // Import the file patterns to be linted
import ignores from './configs/ignores.js'; // Import ignored patterns for files that should not be linted
import languageOptions from './configs/languageOptions.js'; // Import language options for JavaScript linting
import linterOptions from './configs/linterOptions.js'; // Import options related to the linting process
import name from './configs/name.js'; // Import the name for the ESLint configuration
import plugins from './configs/plugins.js'; // Import plugins to extend ESLint functionality
import rules from './configs/rules.js'; // Import rules for enforcing code quality and style
import settings from './configs/settings.js'; // Import additional settings for ESLint

// Import combined recommended configurations
import recommendedConfigs from './configs/recommendedConfigs.js'; // Contains markdown, eslint, and oxlint configs

// Import markdown processor configurations
import markdownProcessor from './configs/processor.js'; // Import markdown processor settings

// Main ESLint flat configuration array
export default [
  // Include recommended configs
  ...recommendedConfigs.markdownConfig, // Spread operator to include markdown recommendations
  recommendedConfigs.eslintConfig, // Include ESLint's recommended rules as a base configuration
  recommendedConfigs.oxlintConfig, // Include recommended rules from the oxlint plugin (should be last in the array)
  ...markdownProcessor, // Include the markdown processor configurations

  // Configuration for JavaScript and related files
  {
    name, // Use the imported name for the ESLint configuration
    files, // Specify which files to lint
    ignores, // Patterns for files to ignore
    languageOptions, // Language options for ECMAScript
    plugins, // Plugins to extend ESLint functionality
    rules, // Rules to enforce code quality and style
    settings, // Additional settings for ESLint
    linterOptions: {
      ...linterOptions, // Apply linter options here
    },
  },
];
