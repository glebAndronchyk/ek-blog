import { useDispatch } from 'react-redux';

import Button from '../button/Button';
import { modalOpenStateChanged } from '../../slices/loginSlice';

const LoginButton = () => {
  const dispatch = useDispatch();

  const changeModalStatus = () => {
    return dispatch(modalOpenStateChanged());
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

export default LoginButton;
