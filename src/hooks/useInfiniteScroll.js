import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const useInfiniteScroll = triggerFunc => {
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      triggerFunc();
    }
  }, [inView]);

  return ref;
};

export default useInfiniteScroll;
