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
      <span className="text-lg text-gray-50">Test Test(You)</span>
    </>
  );
};

export default BannerUserProfileContent;
