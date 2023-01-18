import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import NewsItem from '../newsItem/NewsItem';
import { getData } from './postsListSlice';

const PostsList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  // EXAMPLE
  return (
    <ul className="px-40 pt-20">
      <NewsItem
        to="/posts"
        feedData={{
          createdAt: '2021-11-15T13:33:52.586Z',
          title: 'dsadsa',
          body: 'dsad',
        }}
      />
      <NewsItem
        to="/posts"
        feedData={{
          createdAt: '2021-11-15T13:33:52.586Z',
          title: 'dsadsa',
          body: 'dsad',
        }}
      />
    </ul>
  );
};

export default PostsList;
