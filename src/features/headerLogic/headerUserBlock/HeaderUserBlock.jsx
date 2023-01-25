import { Link } from 'react-router-dom';

import LogoutButton from 'features/logout/logoutButton/LogoutButton';

import Test from 'assets/images/AnnouncementsItemPlug.png';

const HeaderUserBlock = () => {
  return (
    <div className="flex justify-between items-center max-w-[150px] w-full overflow-hidden">
      <LogoutButton />
      <Link to="/">
        <img
          src={Test}
          className="rounded-full w-[50px] h-[50px] bg-app-red"
          alt="profile"
        />
      </Link>
    </div>
  );
};

export default HeaderUserBlock;
