import avatars from 'helpers/avatars';
import useNewsItemData from 'hooks/useNewsItemData';

const CommentsItem = props => {
  const { itemData, id, creatorID } = props;
  const { createdAt, isUpdated, body, currentUserID, isAuth, userFullName } = useNewsItemData(itemData);

  return (
    <div className="flex justify-between mb-4 items-center">
      <img
        src={avatars[0]}
        alt="profileImage"
        className="w-[50px] h-[50px] mr-4"
      />
      <div className="w-full">
        <span className="block mb-[2px] text-lg">{userFullName}</span>
        <div className="rounded-[20px] border-2 p-2 text-lg break-words">{body}</div>
      </div>
    </div>
  );
};

export default CommentsItem;
