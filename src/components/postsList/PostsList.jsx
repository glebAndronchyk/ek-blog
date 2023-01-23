import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import PostsItem from '../postsItem/PostsItem';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import { getAdditionalData, stateReseted } from '../../slices/postsListSlice';
import { IDLE } from '../../helpers/loadingStatus';

const PostsList = () => {
  const { data, additionalLoading, page, showLoadMoreButton } = useSelector(
    state => state.posts,
  );

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
          btnDisabled={additionalLoading !== IDLE}
        />
      ) : (
        <span className="block text-center">Posts Ended</span>
      )}
    </>
  );
};

export default PostsList;
