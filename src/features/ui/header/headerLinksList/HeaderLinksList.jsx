import PropTypes from 'prop-types';

import StyledNavLinkGroup from 'features/ui/styledNavLink/StyledNavLinkGroup';

const HeaderLinksList = props => {
  const { shownCondition } = props;

  return (
    !shownCondition && (
      <ul className="sm:flex sm:justify-between sm:items-center sm:max-w-[200px] sm:w-full">
        <StyledNavLinkGroup
          contentTable={[
            { label: 'Posts', path: '/posts' },
            { label: 'Announcements', path: '/announcements' },
          ]}
          className="relative text-app-red font-inter font-[500] text-lg after:bg-app-red"
        />
      </ul>
    )
  );
};

HeaderLinksList.propTypes = {
  shownCondition: PropTypes.bool,
};

export default HeaderLinksList;
