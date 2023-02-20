import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from 'features/ui/buttons/button/Button';

const BackButton = props => {
  const { className } = props;
  const btnClassName = classNames('rounded-full w-[30px] h-[30px] bg-app-red hover:bg-[#DE8193]', className);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <Button
      onClick={handleClick}
      className={btnClassName}
    >
      <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
    </Button>
  );
};

BackButton.propTypes = {
  className: PropTypes.string,
};

export default BackButton;
