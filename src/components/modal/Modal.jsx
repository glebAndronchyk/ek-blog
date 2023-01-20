import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal-root');
const Modal = props => {
  const { children } = props;

  return createPortal(children, modalRoot);
};

export default Modal;
