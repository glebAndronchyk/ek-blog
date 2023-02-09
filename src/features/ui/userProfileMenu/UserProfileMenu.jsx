import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const UserProfileMenu = () => {
  return (
    <ul className="flex items-center justify-evenly bg-app-red p-2 border-t-2">
      <li className="font-inter font-[600] text-black">
        <StyledNavLink
          to="settings"
          type="profilePage"
        >
          Settings
        </StyledNavLink>
      </li>
    </ul>
  );
};

export default UserProfileMenu;
