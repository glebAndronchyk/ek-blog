import PropTypes from 'prop-types';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import NewsController from 'features/news/newsControl/newsController/NewsController';
import NewsItemContent from 'features/ui/newsItemContent/NewsItemContent';
import useNewsItemData from 'hooks/useNewsItemData';

import AnnouncementsItemPlug from 'assets/images/AnnouncementsItemPlug.png';

const AnnouncementsItem = props => {
  const { itemData, id, creatorID } = props;
  const { createdAt, title, body, currentUserID, isAuth } = useNewsItemData(itemData);
  const dateInCorrectFormat = getDateInCorrectFormat(createdAt);

  return (
    <li
      className="relative flex flex-row items-center justify-between list-none bg-white mb-4 ring-1 ring-gray-100 px-4
                 sm:ring-0
                 md:rounded-3xl md:px-6
                 lg:p-4
                 2xl:max-w-[80%] 2xl:mx-auto"
    >
      <NewsItemContent
        body={body}
        title={title}
        createdAt={dateInCorrectFormat}
        imagePlug={AnnouncementsItemPlug}
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
