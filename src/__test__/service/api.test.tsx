import '@testing-library/jest-dom'
import { fetchApi } from '@/config/axios';
import { topHeadlines } from '@/service/api';

jest.mock('@/config/axios');

describe('topHeadlines function', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should fetch top headlines with correct parameters', async () => {
    const expectedResponse = { data: 'mocked response' };
    (fetchApi as jest.Mock).mockResolvedValue(expectedResponse);

    const country = 'us';
    const search = 'example';
    const category = 'business';
    const response = await topHeadlines(country, search, category);

    expect(fetchApi).toHaveBeenCalledWith('get', 'top-headlines?country=us&q=example&category=business');

    expect(response).toEqual(expectedResponse);
  });

//   test('should return error when API call fails', async () => {
//     // Mock fetchApi rejection
//     const expectedError = new Error('Mocked error message');
//     fetchApi.mockRejectedValue(expectedError);

//     // Call topHeadlines function with mock parameters
//     const country = 'us';
//     const search = 'example';
//     const category = 'business';
//     const response = await topHeadlines(country, search, category);

//     // Verify that fetchApi is called with correct parameters
//     expect(fetchApi).toHaveBeenCalledWith('get', 'top-headlines?country=us&q=example&category=business');

//     // Verify that the response is an error object
//     expect(response).toEqual(expectedError);
//   });
});
