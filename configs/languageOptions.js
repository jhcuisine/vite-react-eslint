// Importing necessary modules for ESLint configuration
import babelParser from '@babel/eslint-parser'; // Babel parser for ESLint to understand modern JavaScript syntax
import globals from 'globals'; // Importing global variable definitions for different environments

// Language options configuration
// This configuration object specifies how JavaScript is treated by ESLint.
export default {
  // The version of ECMAScript to support; 'latest' ensures support for the most recent features
  ecmaVersion: 'latest',

  // Specifies the type of code structure:
  // 'module' allows using ES6 module syntax (import/export)
  sourceType: 'module',

  // Defining global variables that can be referenced throughout the codebase
  globals: {
    document: 'readonly', // Read-only access to the 'document' object (DOM)
    window: 'readonly', // Read-only access to the 'window' object (browser global)
    // Merging global variables defined in 'globals' package for Node.js and browser environments
    ...globals.node,
    ...globals.browser,
  },

  // Specifies the parser used to process the code
  parser: babelParser, // Using Babel parser for modern JavaScript features

  // Parser options for customizing Babel's parsing behavior
  parserOptions: {
    // Disabling requirement for a Babel config file; useful for projects without an explicit Babel configuration
    requireConfigFile: false,

    // Options for Babel's behavior during parsing
    babelOptions: {
      // Disabling .babelrc and configFile to streamline parsing; useful for one-off setups
      babelrc: false,
      configFile: false,

      // Specifying the presets to use for transpiling JavaScript and React JSX syntax
      presets: [
        '@babel/preset-env', // Preset for transpiling ES6+ down to ES5
        '@babel/preset-react', // Preset for transforming React JSX into JavaScript
      ],
    },
  },
};
