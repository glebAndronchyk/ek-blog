import { useDispatch } from 'react-redux';

import { userLoggedOut } from '../../../redux/slices/userSlice';
import Button from '../../ui/button/Button';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLoggedOut());
  };

  return (
    <Button
      className="log-out-btn h-full"
      onClick={clickHandler}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
