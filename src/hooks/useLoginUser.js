import { useState } from 'react';

import { IDLE, LOADING, REJECTED } from '../helpers/loadingStatus';
import { login } from '../services/authService';
import { setItemToStorage } from '../helpers/localStorage';

const useLoginUser = () => {
  const [loggingStatus, setLoggingStatus] = useState(IDLE);

  const tryToLogin = async data => {
    try {
      setLoggingStatus(LOADING);
      const response = await login(data);
      setItemToStorage('token', response.accessToken);
      setLoggingStatus(IDLE);
    } catch (e) {
      setLoggingStatus(REJECTED);
    }
  };

  return { tryToLogin, loggingStatus };
};

export default useLoginUser;
