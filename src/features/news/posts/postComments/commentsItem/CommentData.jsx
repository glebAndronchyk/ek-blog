import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import onEditChecker from 'helpers/onEditChecker';

const CommentData = props => {
  const { isUpdated, localIsUpdated, localFullName, createdAt } = props;

  return (
    <div
      className="flex flex-col mb-[2px]
                sm:items-center sm:flex-row"
    >
      <span className="block text-lg mr-4">{localFullName}</span>
      <span className="mr-4 text-sm text-gray-100">{getDateInCorrectFormat(createdAt)}</span>
      <span className="mr-4 text-sm text-gray-100">
        {onEditChecker({ condition: isUpdated || localIsUpdated, output: 'Edited' })}
      </span>
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
