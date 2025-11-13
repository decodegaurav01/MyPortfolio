import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
//   {
//   "presets": [
//     [
//       "@babel/preset-react",
//       {
//         "pragma": "dom", // default pragma is React.createElement (only in classic runtime)
//         "pragmaFrag": "DomFrag", // default is React.Fragment (only in classic runtime)
//         "throwIfNamespace": false, // defaults to true
//         "runtime": "classic" // defaults to classic
//         // "importSource": "custom-jsx-library" // defaults to react (only in automatic runtime)
//       }
//     ]
//   ]
// }
])
