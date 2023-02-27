import axiosInstance from 'services/axiosService';
import editUserData from 'services/userService';

jest.mock('axios');

describe('userService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });
  const userData = { name: 'John Doe', email: 'john.doe@example.com' };
  const userId = 123;

  it('should update user data successfully', async () => {
    axiosInstance.patch.mockResolvedValueOnce({ data: userData });
    const result = await editUserData(userData, userId);
    expect(axiosInstance.patch).toHaveBeenCalledWith(`/users/${userId}`, userData);
    expect(result).toEqual(userData);
  });
});
