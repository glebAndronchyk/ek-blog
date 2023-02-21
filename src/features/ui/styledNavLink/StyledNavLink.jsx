import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const StyledNavLink = props => {
  const { to, children, className } = props;

  const currentClassName = isActive => {
    return classNames(className, 'nav-link', {
      'nav-link__active': isActive,
    });
  };

  const buildClassName = value => {
    const { isActive } = value;
    return currentClassName(isActive);
  };

  return (
    <NavLink
      to={to}
      className={buildClassName}
    >
      {children}
    </NavLink>
  );
};

StyledNavLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  className: PropTypes.string,
};

export default StyledNavLink;
