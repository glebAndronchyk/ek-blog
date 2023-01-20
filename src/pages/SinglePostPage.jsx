import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import getDateInCorrectFormat from '../helpers/getDateInCorrectFormat';
import useGetPostsData from '../hooks/useGetPostsData';

import { LOADING, REJECTED } from '../helpers/loadingStatus';
import Spinner from '../components/spinner/Spinner';
import ErrorPlug from '../components/errorPlug/ErrorPlug';

import './css/singlePostPage.css';

const SinglePostPage = () => {
  const { postId } = useParams();
  const { page, author, getData, loading } = useGetPostsData(postId, 'posts');
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
      <h2 className="font-[600] text-black text-3xl relative mb-2 single-post-deco before:bg-app-red">
        {title}
      </h2>
      <span className="block pl-4 mb-2 font-[400] text-gray-500 text-base">
        By: {`${firstname} ${lastname}. `}
        {`Created at: ${getDateInCorrectFormat(
          createdAt,
        )}, Updated at: ${getDateInCorrectFormat(updatedAt)}`}
      </span>
      <p className="relative text-lg single-post-deco before:bg-blue-100">
        {body}
      </p>
      {/*TODO: MAKE COMMENTS SECTION*/}
    </article>
  );
};

export default SinglePostPage;
