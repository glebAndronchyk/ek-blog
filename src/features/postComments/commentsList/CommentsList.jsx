import { useParams } from 'react-router-dom';

import CommentsItem from 'features/postComments/commentsItem/CommentsItem';
import useGetInitialData from 'hooks/useGetInitialData';
import useNewsListData from 'hooks/useNewstListData';
import { getInitialData } from 'redux/slices/commentsSlice';
import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';

const CommentsList = () => {
  const { postId } = useParams();
  const { initialLoading } = useGetInitialData('comments', getInitialData, postId);
  const { data, showLoadMoreButton, clickHandler } = useNewsListData('comments', postId);

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
          userFullName: `${item.user?.firstname} ${item.user?.lastname}`,
        }}
      />
    );
  });

  return (
    <section className="article-content">
      <span className="block mb-2 pb-2 border-b-2 text-xl">Comments</span>
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
