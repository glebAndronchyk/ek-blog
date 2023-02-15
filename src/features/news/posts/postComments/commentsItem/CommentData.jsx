import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';

const CommentData = props => {
  const { isUpdated, localIsUpdated, localFullName, createdAt } = props;

  const commentOnEditedChecker = () => {
    if (isUpdated || localIsUpdated) return 'Edited';
    return null;
  };

  return (
    <div
      className="flex flex-col mb-[2px]
                sm:items-center sm:flex-row"
    >
      <span className="block text-lg mr-4">{localFullName}</span>
      <span className="mr-4 text-sm text-gray-100">{getDateInCorrectFormat(createdAt)}</span>
      <span className="mr-4 text-sm text-gray-100">{commentOnEditedChecker()}</span>
    </div>
  );
};

CommentData.propTypes = {
  isUpdated: PropTypes.bool,
  localIsUpdated: PropTypes.bool,
  localFullName: PropTypes.string.isRequired,
  createdAt: PropTypes.string,
};

export default CommentData;
