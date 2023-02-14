import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import NewsController from 'features/news/newsControl/newsController/NewsController';
import NewsItemContent from 'features/ui/newsItemContent/NewsItemContent';
import useNewsItemData from 'hooks/useNewsItemData';
import processLongText from 'helpers/processLongText';

import PostsItemPlug from 'assets/images/PostsItemPlug.png';

const PostsItem = props => {
  const { itemData, to, id, creatorID } = props;
  const { createdAt, title, body, currentUserID, isAuth } = useNewsItemData(itemData);
  const processedBody = processLongText(body);
  const dateInCorrectFormat = getDateInCorrectFormat(createdAt);

  return (
    <li
      className="relative list-none bg-white mb-4 md:duration-300 ring-1 ring-gray-100
                 sm:ring-0
                 md:hover:shadow-lg md:rounded-3xl
                 2xl:max-w-[80%] 2xl:mx-auto"
    >
      <Link
        className="flex flex-row px-4 items-center justify-between
                   md:rounded-3xl md:px-6
                   lg:p-4"
        to={to}
      >
        <NewsItemContent
          body={processedBody}
          title={title}
          createdAt={dateInCorrectFormat}
          imagePlug={PostsItemPlug}
        />
      </Link>
      <NewsController
        modalConfiguration={{ entity: 'posts', name: 'Post', id, createdAt, title, body }}
        isAuth={isAuth}
        creatorID={creatorID}
        currentUserID={currentUserID}
      />
    </li>
  );
};

PostsItem.propTypes = {
  itemData: PropTypes.exact({
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  to: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  creatorID: PropTypes.number.isRequired,
};

export default PostsItem;
