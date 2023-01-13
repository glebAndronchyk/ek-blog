import {NavLink} from "react-router-dom";
import classNames from "classnames";

const StyledNavLink = () => {

  const currentClassName = (checker) => {
    const className = classNames({
      'nav-link': !checker,
      'nav-link__active': checker
    });
    return className;
  }

  return (
    <NavLink to='/posts'
             className={({isActive}) => currentClassName(isActive)}
    >
      Hello
    </NavLink>
  )
}

export default StyledNavLink;
