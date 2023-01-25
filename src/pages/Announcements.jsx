import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Banner from '../features/ui/banner/Banner';
import ExtendedWithInitialLoadingAnnouncementsList from '../features/announcementsList/AnnouncementsList';
import { getInitialData } from '../redux/slices/announcementsListSlice';
import AnnouncementsBg from '../assets/images/announcements-banner-bg.webp';

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
      <ExtendedWithInitialLoadingAnnouncementsList initialLoading={initialLoading} />
    </>
  );
};
export default Announcements;
