import { Outlet } from 'react-router-dom';

import StyledNavLinkGroup from 'features/ui/styledNavLink/StyledNavLinkGroup';

const UserNewsPage = () => {
  return (
    <>
      <ul className="flex justify-evenly items-center py-2">
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
