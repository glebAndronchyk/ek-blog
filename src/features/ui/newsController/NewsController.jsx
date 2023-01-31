import PropTypes from 'prop-types';

import EditItem from 'features/newsControl/editItem/EditItem';
import DeleteItem from 'features/newsControl/deleteItem/DeleteItem';

const NewsController = props => {
  const { postID } = props;

  return (
    <div>
      <EditItem postID={postID} />
      <DeleteItem postID={postID} />
    </div>
  );
};

NewsController.propTypes = {
  postID: PropTypes.number.isRequired,
};

export default NewsController;
