import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import Button from 'features/ui/buttons/button/Button';
import Locked from 'features/news/newsControl/newsForm/newsFormButton/Locked';
import { modalOpened } from 'redux/slices/modalSlice';

const NewsFormButton = props => {
  const { label, name } = props;
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const buttonContent = isAuth ? `Create new ${label}` : <Locked label={label} />;

  const openModal = () => {
    return dispatch(modalOpened({ name: 'NewsForm', modalConfiguration: { entity: label, name } }));
  };

  return (
    <div className="px-40 pt-5">
      <Button
        type="create"
        disabled={!isAuth}
        className="create-news-button"
        onClick={openModal}
      >
        {buttonContent}
      </Button>
    </div>
  );
};

NewsFormButton.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default NewsFormButton;
