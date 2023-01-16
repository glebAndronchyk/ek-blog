import {Link} from "react-router-dom";

import Logo from '../../assets/images/logo.png'

const Header = () => {

  return (
    <header className='px-16 py-4 flex justify-between items-center bg-blue-100 shadow-lg shadow-blue-100'>
      <Link to='/'>
        <h1>
          <img className='h-8' src={Logo} alt="ekreative" />
        </h1>
      </Link>
      <div className='flex justify-between'>
        <ul className='flex justify-between '>
          <li className='mr-7'>
            {/*<StyledNavLink to='/posts' type='header'>Posts</StyledNavLink>*/}
          </li>
          <li className='mr-7'>
            {/*<StyledNavLink to='/announcements' type='header'>Announcements</StyledNavLink>*/}
          </li>
        </ul>
        {/*<Button className='ml-7' type='header-btn' disabled='false'>dsadsadsa</Button>*/}
      </div>
    </header>
  );
}

export default Header;
