require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-recommended',
        '@vue/standard',
        '@vue/typescript/recommended',
        'eslint:recommended',
        'plugin:vue/vue3-essential',
        '@vue/eslint-config-typescript'
    ],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4, { SwitchCase: 0 }],
        quotes: [
            'error',
            'single'
        ],
        semi: [
            'error',
            'always'
        ],
        'space-before-function-paren': ['error', {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always'
        }],
        'vue/no-multiple-template-root': 'off',
        'vue/html-indent': 'off',
        'vue/html-closing-bracket-spacing': 'off',
        'vue/html-closing-bracket-newline': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-extra-semi': 'off',
        'func-call-spacing': 'off',
    }
};