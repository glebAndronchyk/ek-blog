import PropTypes from 'prop-types';
import { Fragment } from 'react';

import StyledNavLink from 'features/ui/styledNavLink/StyledNavLink';

const StyledNavLinkGroup = props => {
  const { contentTable, className, breaker } = props;

  return contentTable.map((item, index) => {
    const key = index + 1;
    const { label, path } = item;
    return (
      <Fragment key={key}>
        <li key={key}>
          <StyledNavLink
            to={path}
            className={className}
          >
            {label}
          </StyledNavLink>
        </li>
        {index === 0 && breaker}
      </Fragment>
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
  breaker: PropTypes.string,
};

export default StyledNavLinkGroup;
