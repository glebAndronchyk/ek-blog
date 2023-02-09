import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getUserDataFromStorage } from 'helpers/localStorage';

const BannerUserProfileContent = () => {
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const { dataChanged } = useSelector(state => state.user);

  useEffect(() => {
    const { firstname, lastname, avatar } = getUserDataFromStorage();
    setUserFirstName(firstname);
    setUserLastName(lastname);
    setUserAvatar(avatar);
  }, [dataChanged]);

  return (
    <>
      <img
        src={userAvatar}
        alt="avatar"
        className="w-[120px] h-[120px] mb-2 rounded-full bg-gray-50 p-[2px]"
      />
      <span className="text-lg text-gray-50">{`${userFirstName} ${userLastName}(You)`}</span>
    </>
  );
};

export default BannerUserProfileContent;
