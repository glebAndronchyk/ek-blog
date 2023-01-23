import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import LoadMoreButton from '../loadMoreButton/LoadMoreButton';
import AnnouncementsItem from '../announcementsItem/AnnouncementsItem';
import { stateReseted, getAdditionalData } from '../../slices/announcementsListSlice';
import { IDLE } from '../../helpers/loadingStatus';

const AnnouncementsList = () => {
  const { data, additionalLoading, page, showLoadMoreButton } = useSelector(state => state.announcements);

  const dispatch = useDispatch();

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
