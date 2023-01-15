import {NavLink} from "react-router-dom";
import classNames from "classnames";

import './styledNavLink.css';

const StyledNavLink = (props) => {

  const {to, type, children} = props;

  const currentClassName = (checker) => {
    return classNames({
      'nav-link-header': !checker && type === 'header',
      'nav-link-header__active': checker && type === 'header',
      //TODO: add more types
    });
  }

  const getActive = (value) => {
    const {isActive} = value;
    return currentClassName(isActive);
  }

  return (
    <NavLink
      to={to}
      className={getActive}
    >
      {children}
    </NavLink>
  )
}

export default StyledNavLink;
