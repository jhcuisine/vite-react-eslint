import airbnbConfig from 'eslint-config-airbnb'; // Importing Airbnb's ESLint configuration for style guide adherence
import prettierConfig from 'eslint-config-prettier'; // Importing Prettier configuration to ensure code formatting consistency

// Rules configuration
export default {
  // Extend rules from Airbnb and Prettier configurations for a comprehensive linting experience
  ...airbnbConfig.rules, // Spread operator to include all Airbnb rules
  ...prettierConfig.rules, // Spread operator to include all Prettier rules

  // React-specific linting rules to enhance component development
  'react/self-closing-comp': ['error', { component: true, html: true }], // Enforce the use of self-closing tags for components and HTML
  'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // Restrict JSX syntax to specific file extensions
  'react/function-component-definition': [
    1,
    { namedComponents: 'arrow-function', unnamedComponents: 'function-expression' },
  ], // Define component function styles for consistency
  'react/prop-types': 'off', // Disable prop-types validation as TypeScript will handle type checking
  'react/state-in-constructor': 'off', // Allow state initialization directly in class properties
  'react/jsx-no-target-blank': 'off', // Permit opening links in a new tab without `rel="noreferrer"`
  'react/no-array-index-key': 'warn', // Warn against using array indices as React keys, which can lead to rendering issues
  'react/no-unstable-nested-components': 'warn', // Warn if unstable nested components are detected, which can affect performance
  'react/react-in-jsx-scope': 'off', // Disables the rule that requires React to be in scope when using JSX
  'react/jsx-uses-react': 'off', // Prevent unused variable error for React

  // ESLint best practices to promote clean and maintainable code
  'no-var': 'error', // Enforce using `let` and `const` instead of `var` for block scoping
  'prefer-const': 'error', // Encourage using `const` for variables that are never reassigned
  'no-console': 'off', // Allow console statements for debugging purposes
  'no-alert': 'off', // Permit alert statements for user notifications
  'no-else-return': 'warn', // Warn against using `else` statements after `return`
  'no-shadow': 'warn', // Warn if a variable shadows a variable declared in the outer scope
  'no-unused-vars': [
    'error',
    {
      varsIgnorePattern:
        '^(React|StrictMode|App|useState|useEffect|useContext|useReducer|useMemo|useCallback|PropTypes|defaultProps|useRef|useImperativeHandle|useLayoutEffect|useId|memo|forwardRef|ReactDOM|useTransition|useDeferredValue)$', // Expanded to ignore common React imports and hooks

      argsIgnorePattern: '^_', // Ignore unused function arguments starting with an underscore
      vars: 'all', // Check all variable declarations
      args: 'after-used', // Only check used arguments after the last used one
      ignoreRestSiblings: true, // Ignore unused variables in destructured objects
    },
  ], // Unused variables and parameters configurations

  // Code style rules to enforce consistent formatting and structure
  indent: ['error', 2], // Enforce 2-space indentation for better readability
  // 'linebreak-style': ['error', 'unix'], // Enforce Windows line endings for compatibility
  'sort-imports': 'off', // Disable sorting of imports to allow flexibility in import ordering
  'import/extensions': 'off', // Disable enforcing file extensions in imports for simplicity
  'import/no-default-export': 'off', // Allow default exports for easier module exports

  // Prettier integration for code formatting consistency
  'prettier/prettier': [
    'error',
    {
      // Enforce Prettier's formatting rules
      trailingComma: 'es5', // Allow trailing commas where valid in ES5 (objects, arrays, etc.)
      singleQuote: true, // Use single quotes instead of double quotes
      printWidth: 100, // Specify the maximum line length before wrapping
      tabWidth: 2, // Set the number of spaces per indentation level
      semi: true, // Require semicolons at the end of statements
      endOfLine: 'auto', // Maintain existing line endings
    },
  ],

  // Accessibility rules to improve user experience for all users
  'jsx-a11y/click-events-have-key-events': 'warn', // Warn if click events are not accompanied by key events for accessibility
  'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Warn against interaction handlers on non-interactive elements

  // React Hooks rules to enforce best practices
  'react-hooks/rules-of-hooks': 'error', // Enforce the Rules of Hooks to ensure proper Hook usage
  'react-hooks/exhaustive-deps': 'warn', // Warn if dependencies are missing from effect hooks

  // Additional rules for various coding practices
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Only export components that are necessary
  'arrow-body-style': ['warn', 'as-needed'], // Allow arrow functions to omit braces when a single expression is returned
  'react/destructuring-assignment': ['error', 'always'], // Require destructuring assignment for component props for cleaner code
  'react/button-has-type': 'error', // Ensure that all buttons have a type attribute to avoid unexpected behavior
  'react/jsx-key': 'warn', // Warn if list items lack a key prop to ensure proper rendering
  'react/jsx-no-bind': 'off', // Allow binding in JSX for flexibility in function usage

  // Miscellaneous rules for a robust coding environment
  'no-alert': 'off', // Allow usage of alert statements as needed
  'func-style': 'off', // Permit mixed function styles (declaration, expression, arrow)
  'import/no-extraneous-dependencies': 'off', // Allow imports from devDependencies for easier module management
};
