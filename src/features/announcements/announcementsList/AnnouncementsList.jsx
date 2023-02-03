import useNewsListData from 'hooks/useNewstListData';
import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import AnnouncementsItem from '../announcementsItem/AnnouncementsItem';

const AnnouncementsList = () => {
  const { data, showLoadMoreButton, clickHandler } = useNewsListData('announcements');

  const newsItems = data.map(item => {
    return (
      <AnnouncementsItem
        key={item.id}
        id={item.id}
        itemData={{
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
