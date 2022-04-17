module.exports = {
  bracketSpacing: true,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  endOfLine: 'lf',
  jsxSingleQuote: true,
  importOrder: [
    '^react$',
    '^react-native$',
    '^@react-navigation/*$',
    '^@app/i18n/(.*)$',
    '^@app/navigation/(.*)$',
    '^@app/screens/(.*)$',
    '^@app/shared/(.*)$',
    '^@app/assets/(.*)$',
    '^[./]'
  ],
  importOrderSeparation: false
}
