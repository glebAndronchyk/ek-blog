import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import HeaderLoginButton from 'features/ui/header/headerLoginButton/HeaderLoginButton';
import HeaderUserBlock from 'features/ui/header/headerUserBlock/HeaderUserBlock';

const HeaderIsAuthContent = props => {
  const { shownCondition } = props;
  const { isAuth } = useSelector(state => state.user);
  const content = !isAuth ? <HeaderLoginButton /> : <HeaderUserBlock />;

  return !shownCondition && content;
};

HeaderIsAuthContent.propTypes = {
  shownCondition: PropTypes.bool,
};

export default HeaderIsAuthContent;
