import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styledNavLink.css';

const StyledNavLink = props => {
  const { to, type, children } = props;

  const currentClassName = isActive => {
    return classNames({
      'nav-link-header': !isActive && type === 'header',
      'nav-link-header__active': isActive && type === 'header',
      // TODO: add more types
    });
  };

  const getActive = value => {
    const { isActive } = value;
    return currentClassName(isActive);
  };

  return (
    <NavLink
      to={to}
      className={getActive}
    >
      {children}
    </NavLink>
  );
};

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default StyledNavLink;
