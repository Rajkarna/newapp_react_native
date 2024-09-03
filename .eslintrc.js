module.exports = {
    env: {
      browser: true,
      es2021: true,
      'react-native/react-native': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended', // If you are using TypeScript
    ],
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 12,
      sourceType: 'module',
      requireConfigFile: false, // Necessary for @babel/eslint-parser
    },
    plugins: [
      'react',
      'react-native',
      '@typescript-eslint', // If you are using TypeScript
    ],
    rules: {
      'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react-native/no-unused-styles': 2,
      'react-native/split-platform-components': 2,
      'react-native/no-inline-styles': 2,
      'react-native/no-color-literals': 2,
      'react-native/no-raw-text': 2,
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn', // If you are using TypeScript
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect the react version
      },
    },
  };
  