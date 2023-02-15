import CommentsList from 'features/news/posts/postComments/commentsList/CommentsList';
import View from 'pages/singlePostPage/View';

const SinglePostPage = () => {
  return (
    // TODO: RETURN BUTTON
    // TODO: REMOVE EDIT BUTTONS
    <article
      className="w-[95%] mx-auto pt-4
                 lg:w-8/12"
    >
      <View />
      <div className="border-t-2 w-full mb-2" />
      <CommentsList />
    </article>
  );
};

export default SinglePostPage;
