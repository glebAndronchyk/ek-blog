import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import { modalClosed } from '../../slices/modalSlice';

const modalRoot = document.getElementById('modal-root');

const Modal = props => {
  const { children } = props;

  const { isShown } = useSelector(state => state.modal);
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

  return createPortal(
    <div
      ref={backgroundRef}
      className={`${className} fixed z-50 inset-0 flex justify-center items-center bg-black/[.5]`}
    >
      {children}
    </div>,
    modalRoot,
  );
};

export default Modal;
