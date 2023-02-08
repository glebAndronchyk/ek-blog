import { Link } from 'react-router-dom';

import LogoutButton from 'features/logout/logoutButton/LogoutButton';
import { getUserDataFromStorage } from 'helpers/localStorage';

const HeaderUserBlock = () => {
  const userProfileImage = getUserDataFromStorage()?.avatar;

  return (
    <div className="flex justify-between items-center max-w-[150px] w-full overflow-hidden">
      <LogoutButton />
      <Link to="/">
        <img
          src={userProfileImage}
          className="rounded-full w-[50px] h-[50px] bg-gray-50 p-[2px]"
          alt="profile"
        />
      </Link>
    </div>
  );
};

export default HeaderUserBlock;
