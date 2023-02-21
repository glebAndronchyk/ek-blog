import PropTypes from 'prop-types';

import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const StyledNavLinkGroup = props => {
  const { contentTable, className } = props;

  return contentTable.map((item, index) => {
    const key = index + 1;
    const { label, path } = item;
    return (
      <li key={key}>
        <StyledNavLink
          to={path}
          className={className}
        >
          {label}
        </StyledNavLink>
      </li>
    );
  });
};

StyledNavLinkGroup.propTypes = {
  contentTable: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ),
  className: PropTypes.string,
};

export default StyledNavLinkGroup;
