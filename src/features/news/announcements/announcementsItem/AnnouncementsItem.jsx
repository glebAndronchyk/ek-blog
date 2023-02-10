import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import NewsController from 'features/news/newsControl/newsController/NewsController';
import useNewsItemData from 'hooks/useNewsItemData';

import AnnouncementsItemPlug from 'assets/images/AnnouncementsItemPlug.png';

const AnnouncementsItem = props => {
  const { itemData, id, creatorID } = props;
  const { createdAt, title, body, currentUserID, isAuth } = useNewsItemData(itemData);

  return (
    <li className="relative flex flex-row px-6 items-center justify-between list-none lg:p-4 md:rounded-3xl bg-white mb-4">
      <div className="flex flex-col pl-1.5 py-4 max-w-[610px] 2xl:max-w-full">
        <span className="font-[400] text-gray-500 uppercase text-xs mb-7 2xl:text-base">
          {getDateInCorrectFormat(createdAt)}
        </span>
        <h3 className="font-[600] text-black text-2xl mb-2.5 2xl:text-3xl">{title}</h3>
        <p className="text-lg text-gray-600 2xl:text-lg max-w-[1241px] break-words">{body}</p>
      </div>
      <img
        className="hidden lg:block lg:pl-1"
        src={AnnouncementsItemPlug}
        alt="item"
      />
      <NewsController
        modalConfiguration={{ entity: 'announcements', name: 'Announcement', id, createdAt, title, body }}
        isAuth={isAuth}
        creatorID={creatorID}
        currentUserID={currentUserID}
      />
    </li>
  );
};

AnnouncementsItem.propTypes = {
  itemData: PropTypes.exact({
    createdAt: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired,
  id: PropTypes.number,
  creatorID: PropTypes.number,
};

export default AnnouncementsItem;
