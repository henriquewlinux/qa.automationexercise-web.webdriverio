import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import * as wdio from 'eslint-plugin-wdio'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default [
    js.configs.recommended,
    ...tseslint.configs.recommended,
    prettierConfig,
    {
        files: ['src/**/*.ts'],
        plugins: {
            wdio,
            prettier,
        },
        rules: {
            ...wdio.configs.recommended.rules,
            'prettier/prettier': 'error',
            '@typescript-eslint/no-explicit-any': 'warn',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
        },
    },
]