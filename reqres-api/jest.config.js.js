// jest.config.js

module.exports = {
  // Убираем testRunner, если он не нужен для кастомного окружения (часто используется стандартный)
  // testRunner: 'jest-circus/runner', // <-- Закомментируйте или удалите эту строку

  // Указываем кастомное окружение из allure-jest
  testEnvironment: "allure-jest/node", // <--- Вот тут изменение

  // setupFilesAfterEnv: ['allure-jest/node'], // <-- Закомментируйте или удалите эту строку

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