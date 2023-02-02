import PropTypes from 'prop-types';
import classNames from 'classnames';

import { MoonLoader } from 'react-spinners';

const Spinner = props => {
  const { className } = props;
  const spinnerClassName = classNames('flex items-center pt-20 justify-center', className);
  return (
    <div className={spinnerClassName}>
      <MoonLoader
        speedMultiplier={0.7}
        color="#D03450"
      />
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;
