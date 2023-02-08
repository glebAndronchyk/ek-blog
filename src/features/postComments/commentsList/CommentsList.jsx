import { useParams } from 'react-router-dom';

import CommentsItem from 'features/postComments/commentsItem/CommentsItem';
import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import CreateCommentForm from 'features/postComments/createCommentForm/CreateCommentForm';
import useGetInitialData from 'hooks/useGetInitialData';
import useNewsListData from 'hooks/useNewstListData';
import IsAuthPlug from 'features/ui/isAuthPlug/IsAuthPlug';
import { getInitialData } from 'redux/slices/commentsSlice';
import { getUserDataFromStorage } from 'helpers/localStorage';
import { useSelector } from 'react-redux';

const CommentsList = () => {
  const { postId } = useParams();
  const { initialLoading } = useGetInitialData('comments', getInitialData, postId);
  const { data, showLoadMoreButton, clickHandler } = useNewsListData('comments', postId);
  const { isAuth } = useSelector(state => state.user);

  const compareUsers = creatorId => {
    return creatorId === getUserDataFromStorage()?.id;
  };

  const setUserFullNameBasedOnStorageData = () => {
    const { firstname, lastname } = getUserDataFromStorage();
    return `${firstname} ${lastname}`;
  };

  const commentsItems = data.map(item => {
    return (
      <CommentsItem
        key={item.id}
        id={item.id}
        creatorID={item.userId}
        itemData={{
          createdAt: item.createdAt,
          isUpdated: !!item.updatedAt,
          body: item.body,
          creatorAvatar: item.user?.avatar,
          userFullName: compareUsers(item.userId)
            ? setUserFullNameBasedOnStorageData()
            : `${item.user?.firstname} ${item.user?.lastname}`,
        }}
      />
    );
  });

  return (
    <section className="article-content">
      <span className="block mb-2 pb-2 border-b-2 text-xl">Comments</span>
      {isAuth ? <CreateCommentForm postId={postId} /> : <IsAuthPlug />}
      {commentsItems}
      {showLoadMoreButton ? (
        <LoadMoreButton
          onClick={clickHandler}
          entity="comments"
        />
      ) : (
        <span className="block text-center">Comments Ended</span>
      )}
    </section>
  );
};

export default CommentsList;
