import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewsItem from '../newsItem/NewsItem';
import { getData } from './postsListSlice';

const PostsList = () => {
  const posts = useSelector(state => state.posts.data);
  const loading = useSelector(state => state.posts.dataLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const calcViewedPart = content => {
    return content.length > 400 ? `${content.slice(0, 400)}...` : content;
  };

  const renderList = data => {
    return data.map(item => {
      return (
        <NewsItem
          key={uuidv4()}
          to={`/posts/${item.id}`}
          feedData={{
            createdAt: item.createdAt,
            title: item.title,
            body: calcViewedPart(item.body),
          }}
        />
      );
    });
  };

  const shownContent = loading === 'loading' ? 'Loading' : renderList(posts);

  return <ul className="px-40 pt-20">{shownContent}</ul>;
};

export default PostsList;
