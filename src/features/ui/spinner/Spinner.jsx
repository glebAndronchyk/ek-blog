import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MoonLoader } from 'react-spinners';

const Spinner = props => {
  const { wrapperClassName, size } = props;
  const spinnerWrapperClassName = classNames('flex items-center justify-center', wrapperClassName);
  return (
    <div className={spinnerWrapperClassName}>
      <MoonLoader
        speedMultiplier={0.7}
        color="#D03450"
        size={size}
      />
    </div>
  );
};

Spinner.propTypes = {
  wrapperClassName: PropTypes.string,
  size: PropTypes.number,
};

export default Spinner;
