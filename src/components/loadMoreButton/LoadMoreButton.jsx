import PropTypes from 'prop-types';
import LoadMoreButtonSpinner from '../loadMoreButtonSpinner/LoadMoreButtonSpinner';

import Button from '../button/Button';

const LoadMoreButton = props => {
  const { onClick, btnDisabled } = props;

  const insideContent = btnDisabled ? (
    <LoadMoreButtonSpinner />
  ) : (
    <span>Load more</span>
  );

  return (
    <Button
      type="load-more-button"
      disabled={btnDisabled}
      onClick={onClick}
    >
      {insideContent}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  btnDisabled: PropTypes.bool.isRequired,
};

export default LoadMoreButton;
