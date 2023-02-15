import { useDispatch } from 'react-redux';

import Button from 'features/ui/buttons/button/Button';
import { modalOpened } from 'redux/slices/modalSlice';

const HeaderLoginButton = () => {
  const dispatch = useDispatch();

  const changeModalStatus = () => {
    return dispatch(modalOpened({ name: 'LoginForm' }));
  };

  return (
    <Button
      onClick={changeModalStatus}
      className="w-24 rounded-lg py-3 border-0 bg-app-red border-2 border-app-red text-black hover:bg-blue-100 hover:text-app-red"
    >
      Login
    </Button>
  );
};

export default HeaderLoginButton;
