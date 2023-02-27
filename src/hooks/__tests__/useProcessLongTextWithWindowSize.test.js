import { renderHook } from '@testing-library/react';
import useProcessLongTextWithWindowSize from 'hooks/useProcessLongTextWithWindowSize';

describe('useProcessLongTextWithWindowSize', () => {
  afterEach(() => {
    window.innerWidth = 1024;
  });

  it('returns dotted text(220+) on width >2000', () => {
    window.innerWidth = 2001;
    const text =
      'Dolore tempor do occaecat officia commodo reprehenderit eu labore. Enim exercitation amet qui ipsum ad. Cupidatat occaecat nisi ipsum cupidatat tempor consequat id dolor eiusmod. Duis dolor anim veniam laboris in id qui pariatur consequat elit. Cillum nulla deserunt do ex aliquip labore commodo culpa in occaecat consequat anim laborum cillum. Mollit laboris dolore dolore eiusmod aliquip in sit elit velit eu ad sunt laboris. Id velit commodo cillum nostrud irure. Aute sunt dolore proident elit ullamco. Irure ex dolor consequat tempor sint nulla duis fugiat sunt ea amet. In quis velit ut occaecat labore nisi consectetur dolor est et.';
    const { result } = renderHook(() => useProcessLongTextWithWindowSize(text));
    expect(result.current.processedText).toHaveLength(223);
  });

  it('returns dotted text(130+) on width <2000', () => {
    window.innerWidth = 1999;
    const text =
      'Dolore tempor do occaecat officia commodo reprehenderit eu labore. Enim exercitation amet qui ipsum ad. Cupidatat occaecat nisi ipsum cupidatat tempor consequat id dolor eiusmod. Duis dolor anim veniam laboris in id qui pariatur consequat elit. Cillum nulla deserunt do ex aliquip labore commodo culpa in occaecat consequat anim laborum cillum. Mollit laboris dolore dolore eiusmod aliquip in sit elit velit eu ad sunt laboris. Id velit commodo cillum nostrud irure. Aute sunt dolore proident elit ullamco. Irure ex dolor consequat tempor sint nulla duis fugiat sunt ea amet. In quis velit ut occaecat labore nisi consectetur dolor est et.';
    const { result } = renderHook(() => useProcessLongTextWithWindowSize(text));
    expect(result.current.processedText).toHaveLength(133);
  });

  it('returns given text text(130-) on width <2000', () => {
    window.innerWidth = 1999;
    const text = 'Ad elit esse ullamco elit. Enim velit enim deserunt in amet incididunt elit. Sunt';
    const { result } = renderHook(() => useProcessLongTextWithWindowSize(text));
    expect(result.current.processedText).toHaveLength(text.length);
  });

  it('returns given text text(220-) on width >2000', () => {
    window.innerWidth = 2001;
    const text = 'Ad elit esse ullamco elit. Enim velit enim deserunt in amet incididunt elit. Sunt';
    const { result } = renderHook(() => useProcessLongTextWithWindowSize(text));
    expect(result.current.processedText).toHaveLength(text.length);
  });
});
