// jest.config.js

module.exports = {
  
  testEnvironment: "allure-jest/node", 

  

  transform: {
    '^.+\\.[tj]s$': ['babel-jest', { configFile: './babel.config.js' }]
  },
  transformIgnorePatterns: [
    '/node_modules/'
  ],
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).[tj]s?(x)'],
  cache: false,
  verbose: true
};
