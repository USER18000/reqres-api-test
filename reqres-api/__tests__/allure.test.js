// __tests__/allure.test.js

describe('Allure Integration Example Suite', () => {
  
  test('Example API Test with Allure Labels', async () => {
    
    allure.epic('API Testing');
    
    allure.feature('User Management');
    
    allure.story('Get User Details');
    
    allure.severity('normal');
    
    allure.description('This test verifies that the API correctly returns user details for a valid user ID.');

    
    console.log('Simulating API call...');
    
    const mockApiResponse = { id: 1, name: 'John Doe', email: 'john@example.com' };

    
    allure.startStep('Step 1: Send GET request to /api/users/1');
    
    allure.endStep('PASSED'); 

    allure.startStep('Step 2: Validate response status code is 200');
    
    allure.endStep('PASSED');

    allure.startStep('Step 3: Validate response body contains expected fields');
    
    allure.endStep('PASSED');

    
    allure.attachment('API Response Body', JSON.stringify(mockApiResponse, null, 2), 'application/json');

    
    expect(mockApiResponse.id).toBe(1);
    expect(mockApiResponse.name).toBe('John Doe');
    expect(mockApiResponse.email).toBe('john@example.com');

    console.log('✅ Allure labels and steps added successfully. Test passed.');
  });

  test('Example Test with Attachment and Links', async () => {
    allure.epic('Reporting');
    allure.feature('Attachments');
    allure.story('Add Text and Link');

    
    allure.attachment('Debug Info', 'Test run completed successfully.', 'text/plain');

    
    allure.link('https://example.com/test-run/123', 'Test Run Link', 'run');
    allure.issue('BUG-123', 'https://jira.example.com/browse/BUG-123');

    expect(1).toBe(1); 
  });

  
  test('Example Failing Test', async () => {
    allure.epic('Error Handling');
    allure.feature('Test Failures');
    allure.story('Report Failure');

    

    expect(1).toBe(2); 
  });
});
