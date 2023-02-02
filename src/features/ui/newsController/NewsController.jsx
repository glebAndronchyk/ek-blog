import PropTypes from 'prop-types';

import EditItem from 'features/newsControl/editItem/EditItem';
import DeleteItem from 'features/newsControl/deleteItem/DeleteItem';

const NewsController = props => {
  const { configuration } = props;

  return (
    <div className="flex justify-evenly absolute z-50 right-0 top-0 max-w-[100px] w-full pt-2">
      <EditItem configuration={configuration} />
      <DeleteItem configuration={configuration} />
    </div>
  );
};

NewsController.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsController;
