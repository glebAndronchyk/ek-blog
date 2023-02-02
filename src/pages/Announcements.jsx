import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Banner from 'features/ui/banner/Banner';
import AnnouncementsList from 'features/announcements/announcementsList/AnnouncementsList';
import { getInitialData } from 'redux/slices/announcementsListSlice';
import AnnouncementsBg from 'assets/images/announcements-banner-bg.webp';
import CreateNewsButton from "features/ui/buttons/createNewsButton/CreateNewsButton";

const Announcements = () => {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector(state => state.announcements);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

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
