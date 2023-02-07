import PropTypes from 'prop-types';

import EditItem from 'features/newsControl/editItem/EditItem';
import DeleteItem from 'features/newsControl/deleteItem/DeleteItem';

const NewsController = props => {
  const { modalConfiguration } = props;

  return (
    <div className="flex justify-evenly absolute z-50 right-0 top-0 max-w-[100px] w-full pt-2">
      <EditItem modalConfiguration={modalConfiguration} />
      <DeleteItem modalConfiguration={modalConfiguration} />
    </div>
  );
};

NewsController.propTypes = {
  modalConfiguration: PropTypes.exact({
    id: PropTypes.number,
    entity: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default NewsController;
