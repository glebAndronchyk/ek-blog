import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import { getAdditionalData, stateReseted } from 'redux/slices/postsListSlice';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import PostsItem from '../postsItem/PostsItem';

const PostsList = () => {
  const { data, page, showLoadMoreButton } = useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(stateReseted());
  }, []);

  const clickHandler = () => {
    return dispatch(getAdditionalData(page));
  };

  const newsItems = data.map(item => {
    return (
      <PostsItem
        key={item.id}
        to={`/posts/${item.id}`}
        id={item.id}
        feedData={{
          createdAt: item.createdAt,
          title: item.title,
          body: item.body,
        }}
      />
    );
  });

  return (
    <ComponentInitialStatus entity="posts">
      <ul className="px-40 pt-10">{newsItems}</ul>
      {showLoadMoreButton ? (
        <LoadMoreButton
          onClick={clickHandler}
          entity="posts"
        />
      ) : (
        <span className="block text-center">Posts Ended</span>
      )}
    </ComponentInitialStatus>
  );
};

export default PostsList;
