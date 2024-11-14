import pluginJs from '@eslint/js'
import eslintcomment from 'eslint-plugin-eslint-comments'
import esimport from 'eslint-plugin-import'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
      'eslint-plugin-eslint-comments': eslintcomment,
      'eslint-plugin-import': esimport,
    },
    rules: {
      'simple-import-sort/imports': [
        'warn',
        {
          groups: [
            // Lib and hooks
            ['^@/lib'],
            // utils
            ['^@/utils'],
            // interface
            ['^@/interfaces'],
            // others imports
            ['^@/'],
            // relative paths up until 3 level
            [
              '^\\./?$',
              '^\\.(?!/?$)',
              '^\\.\\./?$',
              '^\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\.(?!/?$)',
              '^\\.\\./\\.\\./\\.\\./?$',
              '^\\.\\./\\.\\./\\.\\.(?!/?$)',
            ],
            // other that didnt fit in
            ['^'],
          ],
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'warn',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-interface': 'warn',
    },
  },
  {
    ignores: [
      '.commitlintrc.js',
      'node_modules',
      'dist',
      'static',
      'src/interfaces',
      'src/interfaces/request',
      '**/node_modules/',
      '.git/',
      'jest.config.js',
    ],
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
