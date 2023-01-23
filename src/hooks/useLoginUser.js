import { useDispatch } from 'react-redux';

import { userRejected, userLogged, userLogging } from '../slices/userSlice';
import { login } from '../services/authService';
import { setItemToStorage } from '../helpers/localStorage';

const useLoginUser = () => {
  const dispatch = useDispatch();

  const tryToLogin = async data => {
    try {
      dispatch(userLogging());
      const response = await login(data);
      setItemToStorage('token', response.accessToken);
      dispatch(userLogged());
    } catch (e) {
      dispatch(userRejected());
    }
  };

  return { tryToLogin };
};

export default useLoginUser;
