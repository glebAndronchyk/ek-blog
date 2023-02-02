import PropTypes from 'prop-types';
import classNames from 'classnames';

import Button from 'features/ui/buttons/button/Button';
import InputErrorMessage from 'features/ui/inputs/inputError/inputErrorMessage/InputErrorMessage';
import { REJECTED } from 'helpers/loadingStatus';

const View = props => {
  const { onConfirm, onDecline, loading } = props;
  const rejectedChecker = loading === REJECTED;
  const className = classNames('text-xl text-black', rejectedChecker ? 'mb-[2px]' : 'mb-4');

  return (
    <>
      <span className={className}>Are you sure?</span>
      {rejectedChecker ? <InputErrorMessage>Something went wrong :(</InputErrorMessage> : null}
      <div className="flex justify-evenly w-full">
        <Button
          onClick={onConfirm}
          className="duration-300 bg-emerald-600 p-2 rounded-[10px] max-w-[48px] w-full text-black hover:bg-emerald-400"
        >
          YES
        </Button>
        <Button
          onClick={onDecline}
          className="duration-300 bg-app-red p-2 rounded-[10px] max-w-[48px] w-full text-black hover:bg-[#DE8193]"
        >
          NO
        </Button>
      </div>
    </>
  );
};

View.propTypes = {
  onConfirm: PropTypes.func.isRequired,
  onDecline: PropTypes.func.isRequired,
  loading: PropTypes.string,
};

export default View;
