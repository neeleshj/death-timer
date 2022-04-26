module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  settings: {
    react: {
      version: 'latest',
    },
  },
  rules: {
    // indent: ['error', 'tab'],
    // 'linebreak-style': ['error', 'unix'],
    // quotes: ['error', 'single'],
    // semi: ['error', 'always'],
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
  },
  globals: {
    React: 'writable',
  },
};
