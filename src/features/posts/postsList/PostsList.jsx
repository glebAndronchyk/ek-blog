import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import { getAdditionalData, stateReseted } from 'redux/slices/postsListSlice';
import withInitialLoadingStatus from 'hocs/withInitialLoadingStatus';
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
        feedData={{
          createdAt: item.createdAt,
          title: item.title,
          body: item.body,
        }}
      />
    );
  });

  return (
    <>
      <ul className="px-40 pt-20">{newsItems}</ul>
      {showLoadMoreButton ? (
        <LoadMoreButton
          onClick={clickHandler}
          entity="posts"
        />
      ) : (
        <span className="block text-center">Posts Ended</span>
      )}
    </>
  );
};

export default withInitialLoadingStatus(PostsList);
