import {NavLink} from "react-router-dom";

const StyledNavLink = () => {

  return (
    <NavLink to='/posts' className={({isActive}) => isActive ? 'nav-link__active' : 'nav-link'}>Hello</NavLink>
  )
}

export default StyledNavLink;
