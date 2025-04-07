const eslintPluginPrettier = require('eslint-plugin-prettier');
const prettierConfig = require('eslint-config-prettier');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const angularEslint = require('@angular-eslint/eslint-plugin');
const angularTemplateParser = require('@angular-eslint/template-parser');

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: ['./tsconfig.json']
      }
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
      '@angular-eslint': angularEslint,
      prettier: eslintPluginPrettier
    },
    rules: {
      // ✅ Let Prettier handle indentation — turn off ESLint formatting conflicts
      ...prettierConfig.rules,

      'quotes': ['error', 'single'],
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'semi': ['error', 'always'],
      'eqeqeq': ['error', 'smart'],
      'no-console': 'warn',

      // TypeScript Rules
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports' }],

      // Angular Rules
      '@angular-eslint/component-selector': ['error', { type: 'element', prefix: 'app', style: 'kebab-case' }],
      '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix: 'app', style: 'camelCase' }],

      // ✅ Prettier Integration (No Trailing Commas, Fix Indentation)
      'prettier/prettier': ['error', { singleQuote: true, semi: true, trailingComma: 'none', tabWidth: 2 }]
    }
  },
  {
    files: ['**/*.html'],
    languageOptions: {
      parser: angularTemplateParser
    },
    plugins: {
      '@angular-eslint': angularEslint
    },
    rules: {
      // Add Angular template-specific rules if needed
    }
  }
];
