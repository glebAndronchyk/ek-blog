import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { modalClosed } from 'redux/slices/modalSlice';
import Button from 'features/ui/buttons/button/Button';

const CloseButton = () => {
  const dispatch = useDispatch();

  const closeModal = () => {
    return dispatch(modalClosed());
  };

  return (
    <Button
      onClick={closeModal}
      type="button"
      className="absolute top-2 right-2 rounded-full h-[40px] w-[40px] bg-app-red
                 md:hover:bg-[#DE8193] md:duration-300"
    >
      <FontAwesomeIcon icon="fa-solid fa-xmark" />
    </Button>
  );
};

export default CloseButton;
