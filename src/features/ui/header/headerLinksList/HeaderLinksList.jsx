import PropTypes from 'prop-types';

import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const HeaderLinksList = props => {
  const { shownCondition } = props;

  return (
    !shownCondition && (
      <ul className="sm:flex sm:justify-between sm:items-center sm:max-w-[200px] sm:w-full">
        <li className="">
          <StyledNavLink
            to="/posts"
            className="relative text-app-red font-inter font-[500] text-lg after:bg-app-red"
          >
            <span>Posts</span>
          </StyledNavLink>
        </li>
        <li className="">
          <StyledNavLink
            to="/announcements"
            className="relative text-app-red font-inter font-[500] text-lg after:bg-app-red"
          >
            <span>Announcements</span>
          </StyledNavLink>
        </li>
      </ul>
    )
  );
};

HeaderLinksList.propTypes = {
  shownCondition: PropTypes.bool,
};

export default HeaderLinksList;
