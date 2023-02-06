import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import ButtonSpinner from 'features/ui/buttons/buttonSpinner/ButtonSpinner';

import Button from 'features/ui/buttons/button/Button';
import { LOADING } from 'helpers/loadingStatus';

const LoadMoreButton = props => {
  const { onClick, entity } = props;
  const { additionalLoading } = useSelector(state => state[entity]);

  const loadingCondition = additionalLoading === LOADING;

  const insideContent = loadingCondition ? <ButtonSpinner /> : <span>Load more</span>;

  return (
    <Button
      className="load-more-button"
      disabled={loadingCondition}
      onClick={onClick}
    >
      {insideContent}
    </Button>
  );
};

LoadMoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  entity: PropTypes.string.isRequired,
};

export default LoadMoreButton;
