import Banner from 'features/ui/banner/Banner';
import UserProfileMenu from 'features/ui/userProfileMenu/UserProfileMenu';

import userProfileBannerImage from 'assets/images/registrationBg.png';

const UserProfile = () => {
  return (
    <>
      <Banner image={userProfileBannerImage} />
      <UserProfileMenu />
    </>
  );
};

export default UserProfile;
