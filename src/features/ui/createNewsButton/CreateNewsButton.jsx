import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'features/ui/button/Button';
import { modalOpened } from 'redux/slices/modalSlice';

const CreateNewsButton = props => {
  const { label } = props;
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const buttonContent = isAuth ? `Create new ${label}` : `Login or register in order to create new ${label}`;

  const handleClick = () => {
    dispatch(modalOpened());
  };

  return (
    <div className="px-40 pt-5">
      <Button
        type="create"
        disabled={!isAuth}
        className="create-news-button"
        onClick={handleClick}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

CreateNewsButton.propTypes = {
  label: PropTypes.string.isRequired,
};

export default CreateNewsButton;
