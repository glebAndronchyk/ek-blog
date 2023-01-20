import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Spinner from '../spinner/Spinner';
import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import ErrorPlug from '../errorPlug/ErrorPlug';
import AnnouncementsItem from '../announcementsItem/AnnouncementsItem';
import {
  stateReseted,
  getAdditionalData,
  getInitialData,
} from '../../slices/announcementsListSlice';
import { LOADING, IDLE, REJECTED } from '../../helpers/loadingStatus';

const AnnouncementsList = () => {
  const { data, initialLoading, additionalLoading, page, showLoadMoreButton } =
    useSelector(state => state.announcements);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  useEffect(() => {
    return () => dispatch(stateReseted());
  }, []);

  const clickHandler = () => {
    return dispatch(getAdditionalData(page));
  };

  const newsItems = data.map(item => {
    return (
      <AnnouncementsItem
        key={item.id}
        to={`/announcements/${item.id}`}
        feedData={{
          createdAt: item.createdAt,
          title: item.title,
          body: item.body,
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
        <span className="block text-center">Announcements Ended</span>
      )}
    </>
  );
};

export default AnnouncementsList;
