import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import classNames from 'classnames';

import LoginForm from '../loginForm/LoginForm';
import { modalClosed } from '../../slices/loginSlice';

const Login = () => {
  const { isShown } = useSelector(state => state.login);
  const className = classNames({ hidden: !isShown });
  const backgroundRef = useRef(null);
  const dispatch = useDispatch();

  const handleBackgroundClick = event => {
    if (event.target === backgroundRef.current) {
      return dispatch(modalClosed());
    }
    return null;
  };

  const handleEscPress = event => {
    const { key } = event;
    if (key === 'Escape') {
      return dispatch(modalClosed());
    }
    return null;
  };

  useEffect(() => {
    const { current } = backgroundRef;
    current.addEventListener('click', handleBackgroundClick);
    window.addEventListener('keydown', handleEscPress);
    return () => {
      current.removeEventListener('click', handleBackgroundClick);
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      className={`${className} fixed z-50 inset-0 flex justify-center items-center bg-black/[.5]`}
    >
      <LoginForm />
    </div>
  );
};

export default Login;
