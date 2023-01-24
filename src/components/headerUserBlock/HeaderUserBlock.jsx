import LogoutButton from '../logoutButton/LogoutButton';

const HeaderUserBlock = () => {
  return (
    <div className="flex">
      <LogoutButton />
      <span>userimage</span>
    </div>
  );
};

export default HeaderUserBlock;
