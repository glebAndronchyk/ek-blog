import HeaderLoginButton from 'features/ui/header/headerLoginButton/HeaderLoginButton';
import HeaderUserBlock from 'features/ui/header/headerUserBlock/HeaderUserBlock';
import { useSelector } from 'react-redux';

const HeaderIsAuthContent = () => {
  const { isAuth } = useSelector(state => state.user);

  return !isAuth ? <HeaderLoginButton /> : <HeaderUserBlock />;
};

export default HeaderIsAuthContent;
