module.exports = {
  root: true,
  env: {
    node: true,
    "browser": true,
    "es6": true
  },  
  "globals": {
    "grid": true        
  },
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "quotes": ["warn", "double", { "avoidEscape": true }],
    "indent" : ["warn","4"],
    "semi" :["error","always"],    
    "no-var": "error",
    "camelcase" :"warn",
    
  }
}