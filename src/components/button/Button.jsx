import { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, className, onClick, children, disabled } = props;

  const btnClassName = useMemo(() => {
    return classNames('btn', className, {
      disabled,
      'load-more-disabled': className === 'load-more-button' && disabled,
    });
  }, [disabled]);

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      type={type}
      className={btnClassName}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  disabled: PropTypes.bool,
};

export default Button;
