import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import StyledNavLink from '../styledNavLink/StyledNavLink';
import HeaderLoginButton from '../headerLoginButton/HeaderLoginButton';
import HeaderUserBlock from '../headerUserBlock/HeaderUserBlock';

import Logo from '../../assets/images/logo.png';

const Header = () => {
  const { isAuth } = useSelector(state => state.user);

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
      {!isAuth ? <HeaderLoginButton type="header-btn" /> : <HeaderUserBlock />}
    </header>
  );
};

export default Header;
