import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const StyledNavLink = props => {
  const { to, type, children, className } = props;

  const currentClassName = isActive => {
    return classNames(
      {
        'nav-link': !isActive,
        'nav-link-header__active': isActive && type === 'header',
      },
      className,
    );
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default StyledNavLink;
