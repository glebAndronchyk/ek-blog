import { useDispatch } from 'react-redux';

import { userLoggedOut } from '../../slices/userSlice';
import Button from '../button/Button';

const LogoutButton = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(userLoggedOut());
  };

  return <Button onClick={clickHandler}>Logout</Button>;
};

export default LogoutButton;
