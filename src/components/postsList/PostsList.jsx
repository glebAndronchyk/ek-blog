import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import NewsItem from '../newsItem/NewsItem';
import Spinner from '../spinner/Spinner';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import ErrorPlug from '../errorPlug/ErrorPlug';
import { getAdditionalData, getInitialData } from '../../slices/postsListSlice';
import { LOADING, IDLE, REJECTED } from '../../helpers/loadingStatus';

const PostsList = () => {
  const { data, initialLoading, additionalLoading, page, showLoadMoreButton } =
    useSelector(state => state.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  const calcVisiblePart = content => {
    return content.length > 400 ? `${content.slice(0, 400)}...` : content;
  };

  const clickHandler = () => {
    return dispatch(getAdditionalData(page));
  };

  const newsItems = data.map(item => {
    return (
      <NewsItem
        key={item.id}
        to={`/posts/${item.id}`}
        feedData={{
          createdAt: item.createdAt,
          title: item.title,
          body: calcVisiblePart(item.body),
        }}
      />
    );
  });

  if (initialLoading === LOADING) return <Spinner />;
  if (initialLoading === REJECTED) return <ErrorPlug />;

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
