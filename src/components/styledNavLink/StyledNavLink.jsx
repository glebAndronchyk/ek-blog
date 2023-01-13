import {NavLink} from "react-router-dom";

const StyledNavLink = () => {

  const classNameBase = `relative text-app-red font-inter-500 font-medium text-base`;
  const afterStyles = `after:content-[''] after:duration-300 after:absolute after:bg-app-red after:left-0 after:bottom-0 after:h-0.5`
  const activeClassName = `${classNameBase} ${afterStyles} after:w-full`;
  const defaultClassName = `${classNameBase} ${afterStyles} hover:after:w-full after:duration-300 after:w-0`;

  return (
    <NavLink to='/posts' className={({isActive}) => isActive ? activeClassName : defaultClassName}>Hello</NavLink>
  )
}

export default StyledNavLink;
