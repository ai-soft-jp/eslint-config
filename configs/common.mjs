import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';
import * as importx from 'eslint-plugin-import-x';
import globals from 'globals';
import * as tseslint from 'typescript-eslint';

export default defineConfig(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  importx.flatConfigs.recommended,
  importx.flatConfigs.typescript,
  prettier,
  {
    settings: {
      'import-x/internal-regex': '^@/',
    },
    rules: {
      'import-x/no-deprecated': 'warn',
      'import-x/no-mutable-exports': 'error',
      'import-x/no-absolute-path': 'error',
      'import-x/no-dynamic-require': 'warn',
      'import-x/no-relative-packages': 'error',
      'import-x/no-unresolved': 'off',
      'import-x/no-useless-path-segments': 'error',
      'import-x/no-webpack-loader-syntax': 'error',
      'import-x/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import-x/first': 'error',
      'import-x/newline-after-import': ['error', { considerComments: true }],
      'import-x/no-duplicates': 'error',
      'import-x/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object'],
          pathGroups: [
            {
              pattern: 'react{,-dom,-router-dom}{,/**}',
              group: 'builtin',
              position: 'after',
            },
            {
              pattern: 'next{,/**}',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@internal/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: '{,./,../}**/*.css',
              group: 'object',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          alphabetize: {
            order: 'asc',
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
          named: {
            enabled: true,
            types: 'types-last',
          },
          'newlines-between': 'never',
          warnOnUnassignedImports: true,
        },
      ],
    },
  },
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      'comma-dangle': ['error', 'always-multiline'],
      'no-restricted-globals': [
        'error',
        'closed',
        'event',
        'external',
        'length',
        'name',
        'orientation',
        'parent',
        'self',
        'status',
        'top',
      ],
      'no-irregular-whitespace': ['error', { skipStrings: true, skipComments: true }],
      'semi': ['error', 'always'],
      'space-before-function-paren': ['error', { anonymous: 'always', named: 'never', asyncArrow: 'always' }],
      '@typescript-eslint/consistent-type-imports': ['error'],
      '@typescript-eslint/no-empty-object-type': ['error', { allowInterfaces: 'with-single-extends' }],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ['*.ts', '*.mts', '*.tsx'],
    languageOptions: {
      globals: globals.node,
      parserOptions: { projectService: true },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': ['error'],
      '@typescript-eslint/return-await': ['error', 'always'],
    },
  },
);
