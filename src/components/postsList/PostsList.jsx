import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import NewsItem from '../newsItem/NewsItem';
import Spinner from '../spinner/Spinner';
import { getAdditionalData, getInitialData } from './postsListSlice';
import button from '../button/Button';

const PostsList = () => {
  const posts = useSelector(state => state.posts.data);
  const initialLoading = useSelector(state => state.posts.initialLoading);
  const page = useSelector(state => state.posts.page);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const calcVisiblePart = content => {
    return content.length > 400 ? `${content.slice(0, 400)}...` : content;
  };

  const handleClick = pageNumber => () => {
    return dispatch(getAdditionalData(pageNumber));
  };

  // NE FUNKCIYA
  const renderList = data => {
    const items = data.map(item => {
      return (
        <NewsItem
          key={uuidv4()}
          to={`/posts/${item.id}`}
          feedData={{
            createdAt: item.createdAt,
            title: item.title,
            body: calcVisiblePart(item.body),
          }}
        />
      );
    });
    return (
      <>
        {items}
        <button
          type="button"
          onClick={handleClick(page)}
        >
          dsadsadas
        </button>
      </>
    );
  };

  const shownContent =
    initialLoading === 'loading' ? <Spinner /> : renderList(posts);

  return <ul className="px-40 pt-20">{shownContent}</ul>;
};

export default PostsList;
