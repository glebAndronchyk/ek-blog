import { Outlet } from 'react-router-dom';

import StyledNavLinkGroup from 'features/ui/styledNavLink/StyledNavLinkGroup';

const UserNewsPage = () => {
  return (
    <>
      <StyledNavLinkGroup
        contentTable={[
          { label: 'Posts', path: 'posts' },
          { label: 'Announcements', path: 'announcements' },
        ]}
        className=""
      />
      <Outlet />
    </>
  );
};

export default UserNewsPage;
