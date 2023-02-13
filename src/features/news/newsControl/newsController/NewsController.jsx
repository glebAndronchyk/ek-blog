import PropTypes from 'prop-types';

import EditNewsItem from 'features/news/newsControl/editNewsItem/EditNewsItem';
import DeleteItem from 'features/news/newsControl/deleteItem/DeleteItem';

const NewsController = props => {
  const { modalConfiguration, isAuth, currentUserID, creatorID } = props;
  const shownCondition = isAuth && creatorID === currentUserID;

  return (
    shownCondition && (
      <div className="flex justify-evenly absolute z-50 right-0 top-0 max-w-[100px] w-full pt-2">
        <EditNewsItem modalConfiguration={modalConfiguration} />
        <DeleteItem modalConfiguration={modalConfiguration} />
      </div>
    )
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
  isAuth: PropTypes.bool,
  currentUserID: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  creatorID: PropTypes.number,
};

export default NewsController;
