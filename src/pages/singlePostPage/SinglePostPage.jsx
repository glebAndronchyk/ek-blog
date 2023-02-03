import CommentsList from 'features/postComments/commentsList/CommentsList';
import View from 'pages/singlePostPage/View';

const SinglePostPage = () => {
  return (
    // TODO: RETURN BUTTON
    // TODO: REMOVE EDIT BUTTONS
    <article className="w-8/12 mx-auto pt-4">
      <View />
      <div className="border-t-2 w-full mb-2" />
      <CommentsList />
    </article>
  );
};

export default SinglePostPage;
