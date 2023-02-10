import Banner from 'features/ui/banner/Banner';
import AnnouncementsList from 'features/news/announcements/announcementsList/AnnouncementsList';
import CreateNewsButton from 'features/news/newsControl/createNews/createNewsButton/CreateNewsButton';
import useGetInitialData from 'hooks/useGetInitialData';
import { getInitialData } from 'redux/slices/announcementsListSlice';

import AnnouncementsBg from 'assets/images/announcements-banner-bg.webp';

const Announcements = () => {
  const { initialLoading } = useGetInitialData('announcements', getInitialData);

  return (
    <>
      <Banner
        label="Announcements"
        image={AnnouncementsBg}
      >
        <span>Important news</span>
      </Banner>
      <CreateNewsButton
        label="announcements"
        name="announcement"
      />
      <AnnouncementsList initialLoading={initialLoading} />
    </>
  );
};
export default Announcements;
