import {useMemo} from "react";

import './button.css';

const Button = (props) => {
  const {type, onClick, children, disabled} = props;

  const isDisabled = useMemo(() => {
    return disabled ? 'disabled' : null;
  }, [disabled]);

  return (
    <button
      className={`btn ${isDisabled} ${type}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
