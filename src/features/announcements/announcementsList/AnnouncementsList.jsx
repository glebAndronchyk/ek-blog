import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import { stateReseted, getAdditionalData } from 'redux/slices/announcementsListSlice';
import withInitialLoadingStatus from 'hocs/withInitialLoadingStatus';
import AnnouncementsItem from '../announcementsItem/AnnouncementsItem';

const AnnouncementsList = () => {
  const { data, page, showLoadMoreButton } = useSelector(state => state.announcements);

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
          entity="announcements"
        />
      ) : (
        <span className="block text-center">Announcements Ended</span>
      )}
    </>
  );
};

const ExtendedWithInitialLoadingAnnouncementsList = withInitialLoadingStatus(AnnouncementsList);

export default ExtendedWithInitialLoadingAnnouncementsList;
