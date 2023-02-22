import useGetInitialData from 'hooks/useGetInitialData';
import { getInitialUserRelatedData } from 'redux/slices/announcementsListSlice';
import AnnouncementsList from 'features/news/announcements/announcementsList/AnnouncementsList';

const UserAnnouncements = () => {
  useGetInitialData('announcements', getInitialUserRelatedData);

  return <AnnouncementsList isUserProfile />;
};

export default UserAnnouncements;
