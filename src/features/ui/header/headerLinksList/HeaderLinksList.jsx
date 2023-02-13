import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const HeaderLinksList = () => {
  return (
    <ul className="flex justify-between items-center">
      <li className="">
        <StyledNavLink
          to="/posts"
          type="header"
        >
          <span>Posts</span>
        </StyledNavLink>
      </li>
      <li className="">
        <StyledNavLink
          to="/announcements"
          type="header"
        >
          <span>Announcements</span>
        </StyledNavLink>
      </li>
    </ul>
  );
};

export default HeaderLinksList;
