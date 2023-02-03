import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';

import { LOADING, REJECTED } from 'helpers/loadingStatus';
import Spinner from 'features/ui/spinner/Spinner';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';
import Comments from 'features/postComments/comments/Comments';
import useGetPost from 'hooks/useGetPost';

const SinglePostPage = () => {
  const { postId } = useParams();
  const { page, author, getData, loading } = useGetPost(postId);
  const { title, createdAt, updatedAt, body } = page;
  const { firstname, lastname } = author;

  useEffect(() => {
    getData();
  }, []);

  if (loading === LOADING) return <Spinner />;
  if (loading === REJECTED) return <ErrorPlug />;

  return (
    // TODO: RETURN BUTTON
    // TODO: REMOVE EDIT BUTTONS
    <article className="w-8/12 mx-auto pt-4">
      <div className="article-content">
        <h2 className="font-[600] text-black text-3xl relative mb-2 single-post-deco before:bg-app-red">{title}</h2>
        <span className="block pl-4 mb-2 font-[400] text-gray-500 text-base">
          By: {`${firstname} ${lastname}. `}
          {`Created at: ${getDateInCorrectFormat(createdAt)}, Updated at: ${getDateInCorrectFormat(updatedAt)}`}
        </span>
        <p className="relative text-lg single-post-deco before:bg-blue-100 break-words">{body}</p>
      </div>
      <div className="border-t-2 w-full mb-2" />
      <Comments />
    </article>
  );
};

export default SinglePostPage;
