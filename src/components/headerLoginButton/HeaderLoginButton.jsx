import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import { modalOpened } from '../../slices/modalSlice';

const HeaderLoginButton = () => {
  const dispatch = useDispatch();

  const changeModalStatus = () => {
    return dispatch(modalOpened());
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
