import Banner from '../components/banner/Banner';
import AnnouncementsList from '../components/announcementsList/AnnouncementsList';

import AnnouncementsBg from '../assets/images/announcements-banner-bg.webp';

const Announcements = () => {
  return (
    <>
      <Banner
        label="Announcements"
        image={AnnouncementsBg}
      >
        <span>Important news</span>
      </Banner>
      <AnnouncementsList />
    </>
  );
};
export default Announcements;
