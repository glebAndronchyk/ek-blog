import { getUserDataFromStorage } from 'helpers/localStorage';

const BannerUserProfileContent = () => {
  const currentUserAvatar = getUserDataFromStorage().avatar;

  return (
    <>
      <img
        src={currentUserAvatar}
        alt="avatar"
        className="w-[120px] h-[120px] mb-2"
      />
      <span>Test Test</span>
    </>
  );
};

export default BannerUserProfileContent;
