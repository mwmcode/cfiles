module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    serviceworker: true,
    es6: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        project: '.',
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'consistent-return': 'warn',
    'constructor-super': 'warn',
    'eol-last': 'warn',
    'eslint-comments/disable-enable-pair': 0,
    'eslint-comments/no-unused-disable': 'warn',
    'import/named': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'jsx-a11y/accessible-emoji': 'warn',
    'jsx-a11y/label-has-associated-control': [
      2,
      { labelComponents: ['label'] },
    ],
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-autofocus': 'warn',
    'no-console': 'warn',
    'no-const-assign': 'error',
    'no-param-reassign': 'warn',
    'no-this-before-super': 'error',
    'no-undef': 'error',
    'no-unreachable': 'warn',
    'no-unused-vars': 0,
    'no-use-before-define': 0,
    'prefer-arrow-callback': 0,
    'prettier/prettier': 0,
    'react/button-has-type': 0,
    'react/destructuring-assignment': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
    'react/jsx-props-no-spreading': 'warn',
    'react/jsx-uses-react': 0,
    'react/no-array-index-key': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-string-refs': 'warn',
    'react/no-unescaped-entities': 'warn',
    'react/no-unknown-property': 'warn',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'react/require-render-return': 'warn',
    'react/sort-comp': 0,
    'valid-typeof': 'warn',
    semi: 'warn',
  },
};
