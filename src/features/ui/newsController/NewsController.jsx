import PropTypes from 'prop-types';

// import EditItem from 'features/newsControl/editItem/EditItem';
import DeleteItem from 'features/newsControl/deleteItem/DeleteItem';

const NewsController = props => {
  const { configuration } = props;

  return (
    <div className="absolute z-50 right-0 top-0">
      {/*<EditItem postID={postID} />*/}
      <DeleteItem configuration={configuration} />
    </div>
  );
};

NewsController.propTypes = {
  configuration: PropTypes.exact({
    id: PropTypes.number.isRequired,
    entity: PropTypes.string.isRequired,
  }).isRequired,
};

export default NewsController;
