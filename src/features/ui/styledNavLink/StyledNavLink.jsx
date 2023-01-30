import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const StyledNavLink = props => {
  const { to, type, children } = props;

  const currentClassName = isActive => {
    return classNames({
      'nav-link': !isActive,
      'nav-link-header__active': isActive && type === 'header',
      'absolute top-[2%] left-[1%]': type === 'toPosts',
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
  children: PropTypes.element.isRequired,
};

export default StyledNavLink;
