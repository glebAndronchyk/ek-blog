import {useMemo} from "react";
import classNames from "classnames";

import './button.css';

const Button = (props) => {
  const {type, onClick, children, disabled} = props;

  const className = useMemo(() => {
    return classNames('btn', type, { disabled, });
  }, [disabled]);

  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;
