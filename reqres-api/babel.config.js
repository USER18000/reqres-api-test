// babel.config.js
module.exports = {
  presets: [
    ['@babel/preset-env', { 
      targets: { node: 'current' },
      modules: 'commonjs' // Критически важно для Jest!
    }]
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs'
  ]
};