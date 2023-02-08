import { getUserDataFromStorage } from 'helpers/localStorage';

const BannerUserProfileContent = () => {
  const { firstname, lastname, avatar } = getUserDataFromStorage();

  return (
    <>
      <img
        src={avatar}
        alt="avatar"
        className="w-[120px] h-[120px] mb-2 rounded-full bg-gray-50 p-[2px]"
      />
      <span className="text-lg text-gray-50">{`${firstname} ${lastname}(You)`}</span>
    </>
  );
};

export default BannerUserProfileContent;
