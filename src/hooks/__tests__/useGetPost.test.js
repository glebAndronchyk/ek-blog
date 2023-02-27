import { act, renderHook } from '@testing-library/react';
import useGetPost from 'hooks/useGetPost';
import { getItem } from 'services/newsService';
import { IDLE, REJECTED } from 'helpers/loadingStatus';

jest.mock('services/newsService', () => ({
  getItem: jest.fn(),
}));

describe('useGetPost', () => {
  const mockedData = {
    title: 'Test Post',
    body: 'This is a test post.',
    createdAt: '2023-02-22T12:00:00Z',
    updatedAt: '2023-02-22T12:00:00Z',
    user: {
      firstname: 'John',
      lastname: 'Doe',
      id: 1,
    },
  };

  beforeEach(() => {
    getItem.mockResolvedValue(mockedData);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should set loading IDLE after receiving APi response', async () => {
    const { result } = renderHook(() => useGetPost(1));

    await act(async () => {
      await result.current.getData();
    });

    expect(result.current.loading).toBe(IDLE);
  });

  it('should set page like mocked data after receiving APi response', async () => {
    const { result } = renderHook(() => useGetPost(1));

    await act(async () => {
      await result.current.getData();
    });

    expect(result.current.page).toEqual({
      title: 'Test Post',
      body: 'This is a test post.',
      createdAt: '2023-02-22T12:00:00Z',
      updatedAt: '2023-02-22T12:00:00Z',
    });
  });

  it('should set user like mocked data after receiving APi response', async () => {
    const { result } = renderHook(() => useGetPost(1));

    await act(async () => {
      await result.current.getData();
    });

    expect(result.current.author).toEqual({
      firstname: 'John',
      lastname: 'Doe',
      userId: 1,
    });
  });

  it('should set loading REJECTED if API request fails', async () => {
    getItem.mockRejectedValue(new Error('test fail'));

    const { result } = renderHook(() => useGetPost(1));

    await act(async () => {
      await result.current.getData();
    });

    expect(result.current.loading).toBe(REJECTED);
    expect(result.current.page).toHaveLength(0);
    expect(result.current.author).toHaveLength(0);
  });
});
