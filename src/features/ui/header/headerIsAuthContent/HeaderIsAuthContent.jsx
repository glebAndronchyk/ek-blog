import HeaderLoginButton from 'features/ui/header/headerLoginButton/HeaderLoginButton';
import HeaderUserBlock from 'features/ui/header/headerUserBlock/HeaderUserBlock';
import { useSelector } from 'react-redux';

const HeaderIsAuthContent = () => {
  const { isAuth } = useSelector(state => state.user);

  return !isAuth ? <HeaderLoginButton type="header-btn" /> : <HeaderUserBlock />;
};

export default HeaderIsAuthContent;
