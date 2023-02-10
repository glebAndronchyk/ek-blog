import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CommentsItem from 'features/news/posts/postComments/commentsItem/CommentsItem';
import useNewsListData from 'hooks/useNewstListData';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import CreateCommentFormView from 'features/news/posts/postComments/createCommentForm/createCommentFormView/CreateCommentFormView';
import compareUsers from 'helpers/compareUsers';
import { getInitialData } from 'redux/slices/commentsSlice';
import { setUserFullNameBasedOnStorageData, setUserFullNameBasedOnServerData } from 'helpers/userFullNameSetters';

const CommentsList = () => {
  const { postId } = useParams();
  const { data, clickHandler } = useNewsListData('comments', postId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInitialData(postId));
  }, []);

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
            : setUserFullNameBasedOnServerData(item),
        }}
      />
    );
  });

  return (
    <ComponentInitialStatus entity="comments">
      <section className="article-content">
        <span className="block mb-2 pb-2 border-b-2 text-xl">Comments</span>
        <CreateCommentFormView postId={postId} />
        <ul>{commentsItems}</ul>
        <LoadMoreButtonView
          onClick={clickHandler}
          entity="comments"
          label="Comments"
        />
      </section>
    </ComponentInitialStatus>
  );
};

export default CommentsList;
