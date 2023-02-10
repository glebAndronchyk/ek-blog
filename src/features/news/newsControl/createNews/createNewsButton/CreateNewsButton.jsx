import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'features/ui/buttons/button/Button';
import View from 'features/news/newsControl/createNews/createNewsButton/View';
import { modalOpened } from 'redux/slices/modalSlice';

const CreateNewsButton = props => {
  const { label, name } = props;
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const buttonContent = isAuth ? `Create new ${label}` : <View label={label} />;

  const changeModalStatus = () => {
    return dispatch(modalOpened({ name: 'CreateNewsForm', modalConfiguration: { entity: label, name } }));
  };

  return (
    <div className="px-40 pt-5">
      <Button
        type="create"
        disabled={!isAuth}
        className="create-news-button"
        onClick={changeModalStatus}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

CreateNewsButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default CreateNewsButton;
