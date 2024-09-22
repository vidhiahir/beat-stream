import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';

export default [
	{
		rules: {
			'react/react-in-jsx-scope': 'off',
			'prettier/prettier': 'error',
			camelcase: 'error',
			'spaced-comment': 'error',
			quotes: ['error', 'single'],
			'no-duplicate-imports': 'error',
			'no-unused-vars': 'off',
			'no-magic-numbers': 'off',
			'@typescript-eslint/no-unused-vars': 'error',
			'@typescript-eslint/explicit-function-return-type': 'error',
			'@typescript-eslint/strict-boolean-expressions': 'off',
			'@typescript-eslint/no-extraneous-class': 'off',
			'@typescript-eslint/no-magic-numbers': 'error'
		}
	},
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ languageOptions: { globals: globals.browser } },
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	prettier.configs.recommended // Equivalent to "plugin:prettier/recommended"
];
