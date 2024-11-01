// markdownConfig.js
import markdown from 'eslint-plugin-markdown';

export default [
  {
    files: ['**/*.md'], // Target all Markdown files
    processor: 'markdown/markdown', // Enable the Markdown processor
    // Specify the plugin if needed for certain rules or setups
    plugins: {
      markdown, // Add the markdown plugin
    },
  },
];
