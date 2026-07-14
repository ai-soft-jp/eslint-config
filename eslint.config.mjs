import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import * as importx from 'eslint-plugin-import-x';
import globals from 'globals';

export default defineConfig(
  js.configs.recommended,
  importx.flatConfigs.recommended,
  importx.flatConfigs.typescript,
  prettier,
  {
    languageOptions: {
      globals: globals.node,
      sourceType: 'module',
    },
    rules: {
      'semi': ['error', 'always'],
      'import-x/no-unresolved': 'off',
      'import-x/order': [
        'error',
        {
          alphabetize: { order: 'asc' },
          'newlines-between': 'never',
        },
      ],
    },
  },
);
