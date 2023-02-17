import useNewsListData from 'hooks/useNewstListData';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import AnnouncementsItem from 'features/news/announcements/announcementsItem/AnnouncementsItem';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';

const AnnouncementsList = () => {
  const { data, getAdditionallyLoadedData } = useNewsListData('announcements');

  useInfiniteScroll(getAdditionallyLoadedData);

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
      <ul
        className="px-2 pt-10
                  lg:px-20
                  xl:px-40"
      >
        {newsItems}
      </ul>
      <LoadMoreButtonView
        onClick={getAdditionallyLoadedData}
        entity="announcements"
        label="Announcements"
      />
    </ComponentInitialStatus>
  );
};

export default AnnouncementsList;
