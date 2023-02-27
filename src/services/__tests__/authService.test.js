import axiosInstance from 'services/axiosService';
import { login, register } from 'services/authService';

jest.mock('axios');

describe('authService', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('login', () => {
    const email = 'test@example.com';
    const password = 'test';

    it('should be called with such params: "/login", {email. password}', async () => {
      const responseData = { token: 'test', email, password };
      axiosInstance.post.mockResolvedValueOnce({ data: responseData });
      await login({ email, password });
      expect(axiosInstance.post).toHaveBeenCalledWith('/login', { email, password });
    });

    it('on success should return response: {token, email, password}', async () => {
      const responseData = { token: 'test', email, password };
      axiosInstance.post.mockResolvedValueOnce({ data: responseData });
      const response = await login({ email, password });
      expect(response).toEqual(responseData);
    });

    it('should throw an error if the request fails and include the error response', async () => {
      const errorResponse = { status: 401, message: 'Unauthorized' };
      axiosInstance.post.mockRejectedValueOnce({ response: errorResponse });

      await expect(login({ email, password })).rejects.toThrowError(JSON.stringify(errorResponse));
    });
  });

  describe('register', () => {
    const data = { email: 'test@example.com', password: 'test', firstname: 'John', lastname: 'Doe', avatar: 'plug' };

    it('should be called with such params: "/register", {..data}', async () => {
      const responseData = { token: 'test' };
      axiosInstance.post.mockResolvedValueOnce({ data: responseData });
      await register({ ...data });
      expect(axiosInstance.post).toHaveBeenCalledWith('/register', { ...data });
    });

    it('on success should return response: {token}', async () => {
      const responseData = { token: 'test' };
      axiosInstance.post.mockResolvedValueOnce({ data: responseData });
      const response = await register({ ...data });
      expect(response).toEqual(responseData);
    });

    it('should throw an error if the request fails and include the error response', async () => {
      const errorResponse = { status: 401, message: 'Unauthorized' };
      axiosInstance.post.mockRejectedValueOnce({ response: errorResponse });

      await expect(register({ ...data })).rejects.toThrowError(JSON.stringify(errorResponse));
    });
  });
});
