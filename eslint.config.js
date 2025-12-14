import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from '@typescript-eslint/eslint-plugin'

export default {
  extends: [
    js.configs.recommended, 
    ...tseslint.configs.recommended, 
    'plugin:react/recommended', // Add React plugin if it's not already included
  ],
  parser: '@typescript-eslint/parser', // Ensure the TypeScript parser is used
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    '@typescript-eslint': tseslint,
  },
  env: {
    browser: true, // Ensure the browser global scope is recognized
  },
  overrides: [
    {
      files: ['**/*.{ts,tsx}'],
      rules: {
        'no-unused-vars': 'off',  // Disable unused vars rule
        'react/react-in-jsx-scope': 'off',  // Disable 'React' import check in JSX
        'react-hooks/rules-of-hooks': 'error', // React hooks rules
        'react-hooks/exhaustive-deps': 'warn', // Warning for missing dependencies
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
  },
}
