import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import NewsController from 'features/ui/newsController/NewsController';
import { getItemFromStorage } from 'helpers/localStorage';
import { getItem } from 'services/newsService';

import PostsItemPlug from 'assets/images/PostsItemPlug.png';

const PostsItem = props => {
  const { feedData, to, postID } = props;
  const { createdAt, title, body } = feedData;
  const [creatorID, setCreatorID] = useState(null);
  const { isAuth } = useSelector(state => state.user);
  const currentUserID = isAuth && JSON.parse(getItemFromStorage('userData')).id;

  useEffect(() => {
    getItem('posts', postID).then(data => setCreatorID(data.userId));
  }, []);

  // eslint-disable-next-line no-shadow
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
        <NewsController configuration={{ id: postID, entity: 'posts', name: 'Post', createdAt, title, body }} />
      ) : null}
    </li>
  );
};

PostsItem.propTypes = {
  feedData: PropTypes.exact({
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  to: PropTypes.string.isRequired,
  postID: PropTypes.number.isRequired,
};

export default PostsItem;
