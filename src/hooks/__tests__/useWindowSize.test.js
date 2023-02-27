import { renderHook, act } from '@testing-library/react';
import useWindowSize from 'hooks/useWindowSize';

describe('useWindowSize', () => {
  it('returns window size', () => {
    const { result } = renderHook(() => useWindowSize());
    expect(result.current).toEqual({ width: window.innerWidth, height: window.innerHeight });
  });

  it('updates the window size when the window is resized', () => {
    const newWidth = 2000;
    const newHeight = 2000;

    act(() => {
      window.innerWidth = newWidth;
      window.innerHeight = newHeight;
      window.dispatchEvent(new Event('resize'));
    });

    const { result } = renderHook(() => useWindowSize());

    expect(result.current).toEqual({ width: newWidth, height: newHeight });
  });
});
