import { useEffect, useState } from 'react';

const useInfiniteScroll = triggerFunc => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [clientHeight, setClientHeight] = useState(null);
  const scrollCondition = scrollTop + clientHeight >= scrollHeight;

  const onScroll = () => setScrollTop(document.documentElement.scrollTop);

  useEffect(() => {
    setClientHeight(document.documentElement.clientHeight);
  }, [clientHeight]);

  useEffect(() => {
    setScrollHeight(document.documentElement.scrollHeight);
  }, [scrollHeight]);

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (scrollCondition) {
      setScrollHeight(document.documentElement.scrollHeight);
      triggerFunc();
    }
  }, [scrollTop, scrollHeight]);
};

export default useInfiniteScroll;
