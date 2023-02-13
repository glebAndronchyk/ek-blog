import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import AvatarImage from 'features/ui/avatarImage/AvatarImage';
import { getUserDataFromStorage } from 'helpers/localStorage';
import avatars from 'helpers/avatars';

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
      <AvatarImage
        className="w-[120px] h-[120px] mb-2 rounded-full bg-gray-50 p-[2px]"
        src={userAvatar || avatars[0]}
      />
      <span className="text-lg text-gray-50">{`${userFirstName} ${userLastName}(You)`}</span>
    </>
  );
};

export default BannerUserProfileContent;
