import { Link } from 'react-router-dom';

import Logo from 'assets/images/logo.png';

const HeaderLogo = () => {
  return (
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
  );
};

export default HeaderLogo;
