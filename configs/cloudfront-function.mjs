import { defineConfig } from 'eslint/config';
import globals from 'globals';

/**
 * @param  {string[]} files
 * @returns {import('eslint/config').Config[]}
 */
export default function cloudfront_function(...files) {
  return defineConfig({
    files,
    languageOptions: {
      globals: { ...globals.es2015, Buffer: false },
    },
    rules: {
      'no-restricted-globals': ['error', 'eval', 'Function'],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_|^handler$',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-require-imports': ['error', { allow: ['crypto', 'querystring'], allowAsImport: false }],
    },
  });
}
