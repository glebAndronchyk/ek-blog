import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { modalClosed } from 'redux/slices/modalSlice';

const modalRoot = document.getElementById('modal-root');

const Modal = props => {
  const { children } = props;

  const { isShown } = useSelector(state => state.modal);
  const className = classNames({ hidden: !isShown });
  const dispatch = useDispatch();

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
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
    window.addEventListener('keydown', handleEscPress);
    return () => {
      window.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  return createPortal(
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div
      onClick={handleBackgroundClick}
      className={`${className} fixed z-50 inset-0 flex justify-center items-center bg-black/[.5]`}
    >
      {children}
    </div>,
    modalRoot,
  );
};

export default Modal;
