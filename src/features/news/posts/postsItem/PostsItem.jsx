import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import NewsController from 'features/news/newsControl/newsController/NewsController';
import useNewsItemData from 'hooks/useNewsItemData';

import PostsItemPlug from 'assets/images/PostsItemPlug.png';

const PostsItem = props => {
  const { itemData, to, id, creatorID } = props;
  const { createdAt, title, body, currentUserID, isAuth } = useNewsItemData(itemData);

  const processLongBody = text => {
    return body.length > 400 ? `${text.slice(0, 400)}...` : text;
  };

  return (
    <li className="relative list-none duration-300 hover:shadow-lg md:rounded-3xl bg-white mb-4">
      <Link
        className="flex flex-row px-6 items-center justify-between md:rounded-3xl lg:p-4"
        to={to}
      >
        <div className="flex flex-col pl-1.5 py-4 max-w-[610px] 2xl:max-w-full">
          <span className="font-[400] text-gray-500 uppercase text-xs mb-7 2xl:text-base">
            {getDateInCorrectFormat(createdAt)}
          </span>
          <h3 className="font-[600] text-black text-2xl mb-2.5 2xl:text-3xl">{title}</h3>
          <p className="text-lg text-gray-600 2xl:text-lg max-w-[1241px] break-words">{processLongBody(body)}</p>
        </div>
        <img
          className="hidden lg:block lg:pl-1"
          src={PostsItemPlug}
          alt="item"
        />
      </Link>
      {isAuth && creatorID === currentUserID ? (
        <NewsController modalConfiguration={{ entity: 'posts', name: 'Post', id, createdAt, title, body }} />
      ) : null}
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