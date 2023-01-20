import { Link } from 'react-router-dom';
import StyledNavLink from '../styledNavLink/StyledNavLink';
import LoginButton from '../loginButton/LoginButton';

import Logo from '../../assets/images/logo.png';
import Login from '../login/Login';

const Header = () => {
  return (
    <header className="relative z-10 px-16 py-3 flex justify-between items-center bg-blue-100 shadow-lg shadow-blue-100">
      <div className="flex justify-between">
        <Link
          className="mr-24"
          to="/"
        >
          <h1 className="text-center">
            <img
              className="h-8"
              src={Logo}
              alt="ekreative"
            />
            <span className="text-app-red font-[600] pt-2">Blog</span>
          </h1>
        </Link>
        <ul className="flex justify-between items-center">
          <li className="mr-7">
            <StyledNavLink
              to="/posts"
              type="header"
            >
              <span>Posts</span>
            </StyledNavLink>
          </li>
          <li className="mr-7">
            <StyledNavLink
              to="/announcements"
              type="header"
            >
              <span>Announcements</span>
            </StyledNavLink>
          </li>
        </ul>
      </div>
      <LoginButton type="header-btn">Login</LoginButton>
    </header>
  );
};

export default Header;
