import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { userLoggedOut } from 'redux/slices/userSlice';
import Button from 'features/ui/buttons/button/Button';

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
      <span className="mr-2">Log out</span>
      <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />
    </Button>
  );
};

export default LogoutButton;
