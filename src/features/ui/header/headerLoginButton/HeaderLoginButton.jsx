import { useDispatch } from 'react-redux';

import Button from 'features/ui/button/Button';
import { modalOpened } from 'redux/slices/modalSlice';

const HeaderLoginButton = () => {
  const dispatch = useDispatch();

  const changeModalStatus = () => {
    return dispatch(modalOpened('LoginForm'));
  };

  return (
    <Button
      onClick={changeModalStatus}
      className="header-btn"
    >
      Login
    </Button>
  );
};

export default HeaderLoginButton;
