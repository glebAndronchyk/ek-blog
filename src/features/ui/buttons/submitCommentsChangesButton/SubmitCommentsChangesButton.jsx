import PropTypes from 'prop-types';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SubmitCommentsChangesButton = props => {
  const { currentTextAreaContent } = props;
  const disabledCondition = currentTextAreaContent.length === 0;
  const className = classNames('duration-300 rounded-full w-[30px] h-[30px] bg-emerald-600 hover:bg-emerald-400', {
    'bg-emerald-400': disabledCondition,
  });

  return (
    <button
      disabled={disabledCondition}
      type="submit"
      className={className}
    >
      <FontAwesomeIcon
        icon="fa-solid fa-check"
        className="text-lg text-black"
      />
    </button>
  );
};

SubmitCommentsChangesButton.propTypes = {
  currentTextAreaContent: PropTypes.string,
};

export default SubmitCommentsChangesButton;
