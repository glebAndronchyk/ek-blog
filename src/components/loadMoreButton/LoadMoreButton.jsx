import PropTypes from 'prop-types';

import Button from '../button/Button';

const LoadMoreButton = props => {
  const { onClick, btnDisabled } = props;

  return (
    <Button
      type="load-more-button"
      disabled={btnDisabled}
      onClick={onClick}
    >
      Load More
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnDisabled: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
