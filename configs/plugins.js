// Importing necessary ESLint plugins to enforce coding standards and best practices
import importPlugin from 'eslint-plugin-import'; // ESLint plugin to help validate proper imports and exports in ES6+ modules
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'; // Accessibility rules for JSX elements, promoting inclusive and accessible design practices
import prettierPlugin from 'eslint-plugin-prettier'; // Integrates Prettier for consistent code formatting alongside ESLint rules
import reactPlugin from 'eslint-plugin-react'; // Provides linting rules specific to React applications, ensuring best practices in component development
import reactHooksPlugin from 'eslint-plugin-react-hooks'; // Enforces best practices for React Hooks, promoting correct usage and design patterns
import reactRefreshPlugin from 'eslint-plugin-react-refresh'; // Supports hot reloading during development for an enhanced developer experience, allowing immediate feedback on code changes

// Plugins configuration object
// This object maps the plugin names to their respective imported configurations.
// Each key in the object corresponds to a plugin that provides specific linting capabilities.
// This modular setup facilitates easy management and extension of the ESLint configuration as the project evolves.
export default {
  // React-specific linting rules, ensuring adherence to best practices within React components
  react: reactPlugin,

  // Linting rules for React Hooks, promoting correct usage and patterns in functional components
  'react-hooks': reactHooksPlugin,

  // Validates ES6+ import/export syntax, helping to maintain clean and efficient module structures
  import: importPlugin,

  // Accessibility checks for JSX elements, ensuring that applications are usable for all users
  'jsx-a11y': jsxA11yPlugin,

  // Integrates Prettier to enforce code formatting standards, enhancing readability and consistency across the codebase
  prettier: prettierPlugin,

  // Enhances the development experience with hot reloading capabilities, reducing development time and improving feedback loops
  'react-refresh': reactRefreshPlugin,
};
