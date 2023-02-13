import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import LoadMoreButton from 'features/ui/buttons/loadMoreButton/LoadMoreButton';

const LoadMoreButtonView = props => {
  const { onClick, entity, label } = props;
  const { showLoadMoreButton } = useSelector(state => state[entity]);

  return showLoadMoreButton ? (
    <LoadMoreButton
      onClick={onClick}
      entity={entity}
    />
  ) : (
    <span className="block text-center">{label} Ended</span>
  );
};

LoadMoreButtonView.propTypes = {
  onClick: PropTypes.func.isRequired,
  entity: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default LoadMoreButtonView;
