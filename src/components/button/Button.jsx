import { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './button.css';

const Button = props => {
  const { type, onClick, children, disabled } = props;

  const className = useMemo(() => {
    return classNames('btn', type, { disabled });
  }, [disabled]);

  return (
    <button
      type="button"
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
};

export default Button;
