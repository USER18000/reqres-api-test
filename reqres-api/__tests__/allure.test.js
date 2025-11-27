// __tests__/allure.test.js

describe('Allure Integration Example Suite', () => {
  // Пример теста с использованием Allure
  test('Example API Test with Allure Labels', async () => {
    // --- Allure Labels ---
    // Помечаем тест как часть Core Functionality
    allure.epic('API Testing');
    // Указывает на функцию/модуль, который тестируется
    allure.feature('User Management');
    // Описывает конкретный сценарий
    allure.story('Get User Details');
    // Уровень важности
    allure.severity('normal');
    // Описание теста
    allure.description('This test verifies that the API correctly returns user details for a valid user ID.');

    // --- Пример логики теста (фиктивной, так как нет реального API вызова) ---
    console.log('Simulating API call...');
    // Представим, что мы получили ответ от API
    const mockApiResponse = { id: 1, name: 'John Doe', email: 'john@example.com' };

    // --- Allure Steps ---
    // Описываем шаги теста
    allure.startStep('Step 1: Send GET request to /api/users/1');
    // (тут был бы реальный вызов API)
    allure.endStep('PASSED'); // или 'FAILED', 'BROKEN' в зависимости от результата

    allure.startStep('Step 2: Validate response status code is 200');
    // expect(mockApiResponse.status).toBe(200); // Пример проверки
    allure.endStep('PASSED');

    allure.startStep('Step 3: Validate response body contains expected fields');
    // expect(mockApiResponse.data).toHaveProperty('id');
    // expect(mockApiResponse.data).toHaveProperty('name');
    // expect(mockApiResponse.data).toHaveProperty('email');
    allure.endStep('PASSED');

    // --- Allure Attachments (Пример добавления данных) ---
    // Прикрепляем тело ответа API как строку
    allure.attachment('API Response Body', JSON.stringify(mockApiResponse, null, 2), 'application/json');

    // --- Пример проверки ---
    // Замените это на реальные проверки ваших данных
    expect(mockApiResponse.id).toBe(1);
    expect(mockApiResponse.name).toBe('John Doe');
    expect(mockApiResponse.email).toBe('john@example.com');

    console.log('✅ Allure labels and steps added successfully. Test passed.');
  });

  test('Example Test with Attachment and Links', async () => {
    allure.epic('Reporting');
    allure.feature('Attachments');
    allure.story('Add Text and Link');

    // Прикрепляем простой текст
    allure.attachment('Debug Info', 'Test run completed successfully.', 'text/plain');

    // Добавляем ссылку (например, на тестовый стенд или Jira)
    allure.link('https://example.com/test-run/123', 'Test Run Link', 'run');
    allure.issue('BUG-123', 'https://jira.example.com/browse/BUG-123');

    expect(1).toBe(1); // Простой пример
  });

  // Пример теста, который падает, чтобы посмотреть, как Allure отображает ошибки
  test('Example Failing Test', async () => {
    allure.epic('Error Handling');
    allure.feature('Test Failures');
    allure.story('Report Failure');

    // allure.startStep('This step will fail');
    // allure.endStep('FAILED'); // Это можно добавить вручную, но обычно шаги завершаются автоматически

    expect(1).toBe(2); // Этот expect вызовет падение теста
  });
});
