import { useDispatch } from 'react-redux';

import { modalClosed } from 'redux/slices/modalSlice';

const CloseButton = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    return dispatch(modalClosed());
  };

  return (
    <button
      onClick={closeModal}
      type="button"
      className="absolute top-2 right-2 rounded-full h-[40px] w-[40px] bg-app-red"
    >
      X
    </button>
  );
};

export default CloseButton;
