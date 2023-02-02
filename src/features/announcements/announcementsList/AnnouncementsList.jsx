import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import { stateReseted, getAdditionalData } from 'redux/slices/announcementsListSlice';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
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
    <ComponentInitialStatus entity="announcements">
      <ul className="px-40 pt-10">{newsItems}</ul>
      {showLoadMoreButton ? (
        <LoadMoreButton
          onClick={clickHandler}
          entity="announcements"
        />
      ) : (
        <span className="block text-center">Announcements Ended</span>
      )}
    </ComponentInitialStatus>
  );
};

export default AnnouncementsList;
