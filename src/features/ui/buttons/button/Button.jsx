import { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Button = props => {
  const { type, className, onClick, children, disabled } = props;

  const btnClassName = useMemo(() => {
    return classNames('btn', className, {
      disabled,
      'text-blue-100': disabled,
    });
  }, [disabled]);

  return (
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
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.any, PropTypes.string]).isRequired,
  disabled: PropTypes.bool,
};

export default Button;
