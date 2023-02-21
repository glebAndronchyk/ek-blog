import { Outlet } from 'react-router-dom';

import StyledNavLinkGroup from 'features/ui/styledNavLink/StyledNavLinkGroup';

const UserNewsPage = () => {
  return (
    <>
      <ul className="flex justify-around py-2 max-w-[500px] w-full">
        <StyledNavLinkGroup
          contentTable={[
            { label: 'Posts', path: 'posts' },
            { label: 'Announcements', path: 'announcements' },
          ]}
          className="text-black after:bg-black after:bottom-[-2px]"
          breaker="/"
        />
      </ul>
      <Outlet />
    </>
  );
};

export default UserNewsPage;
