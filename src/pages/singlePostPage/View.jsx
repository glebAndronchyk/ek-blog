import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import useGetPost from 'hooks/useGetPost';
import { LOADING, REJECTED } from 'helpers/loadingStatus';
import Spinner from 'features/ui/spinner/Spinner';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';

const View = () => {
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
    <section className="article-content">
      <h2 className="font-[600] text-black text-3xl relative mb-2 single-post-deco before:bg-app-red">{title}</h2>
      <span className="block pl-4 mb-2 font-[400] text-gray-500 text-base">
        By: {`${firstname} ${lastname}. `}
        {`Created at: ${getDateInCorrectFormat(createdAt)}, Updated at: ${getDateInCorrectFormat(updatedAt)}`}
      </span>
      <p className="relative text-lg single-post-deco before:bg-blue-100 break-words">{body}</p>
    </section>
  );
};

export default View;
