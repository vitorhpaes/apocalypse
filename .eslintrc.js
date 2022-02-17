module.exports = {
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-use-before-define': 'off',
    'react/prop-types': 'off',
    'node/handle-callback-err': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',

    // Allows the use of non-boolean types in expressions where a boolean is expected [https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.1/packages/eslint-plugin/docs/rules/strict-boolean-expressions.md]
    '@typescript-eslint/strict-boolean-expressions': 'off',

    // Allows invalidating queries without returning anything [https://eslint.org/docs/rules/no-void]
    'no-void': ['error', {
      allowAsStatement: true
    }],

    // Allows to throw errors that are not an instance of the Error object [https://github.com/typescript-eslint/typescript-eslint/blob/v4.28.2/packages/eslint-plugin/docs/rules/no-throw-literal.md]
    'no-throw-literal': 'off',
  },
}