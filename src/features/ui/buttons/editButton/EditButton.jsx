import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Spinner from 'features/ui/spinner/Spinner';
import { LOADING } from 'helpers/loadingStatus';

const EditButton = props => {
  const { handleClick, currentItemUserActionLoading } = props;
  const onSingleCommentCondition = currentItemUserActionLoading && currentItemUserActionLoading === LOADING;

  return (
    <button
      type="button"
      disabled={onSingleCommentCondition}
      className="duration-300 rounded-full w-[30px] h-[30px] bg-emerald-600 hover:bg-emerald-400"
      onClick={handleClick}
    >
      {onSingleCommentCondition ? (
        <Spinner
          size={18}
          color="#1D2939"
        />
      ) : (
        <FontAwesomeIcon
          icon="fa-solid fa-pen"
          className="text-lg text-black"
        />
      )}
    </button>
  );
};

export default EditButton;

EditButton.propTypes = {
  handleClick: PropTypes.func,
  currentItemUserActionLoading: PropTypes.string,
};
