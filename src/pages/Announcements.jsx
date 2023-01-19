import Banner from '../components/banner/Banner';
import AnnouncementsList from '../components/announcementsList/AnnouncementsList';

const Announcements = () => {
  return (
    <>
      <Banner label="Announcements">
        <span>Important news</span>
      </Banner>
      <AnnouncementsList />
    </>
  );
};
export default Announcements;
