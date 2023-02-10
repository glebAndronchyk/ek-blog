import useNewsListData from 'hooks/useNewstListData';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import AnnouncementsItem from 'features/news/announcements/announcementsItem/AnnouncementsItem';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';

const AnnouncementsList = () => {
  const { data, clickHandler } = useNewsListData('announcements');

  const newsItems = data.map(item => {
    return (
      <AnnouncementsItem
        key={item.id}
        id={item.id}
        creatorID={item.userId}
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
      <LoadMoreButtonView
        onClick={clickHandler}
        entity="announcements"
        label="Announcements"
      />
    </ComponentInitialStatus>
  );
};

export default AnnouncementsList;
