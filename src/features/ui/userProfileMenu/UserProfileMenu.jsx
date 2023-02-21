import StyledNavLinkGroup from 'features/ui/styledNavLink/StyledNavLinkGroup';

const UserProfileMenu = () => {
  return (
    <ul className="flex items-center justify-evenly bg-app-red p-2 border-t-2">
      <StyledNavLinkGroup
        contentTable={[
          { label: 'Settings', path: 'settings' },
          { label: 'Your posts', path: 'posts' },
        ]}
        className="text-black after:bg-black after:bottom-[-2px]"
      />
    </ul>
  );
};

export default UserProfileMenu;
