import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import getDateInCorrectFormat from '../helpers/getDateInCorrectFormat';
import useGetNewsData from '../hooks/useGetNewsData';

const SinglePostPage = () => {
  const { postId } = useParams();
  const { page, getData } = useGetNewsData(postId, 'posts');
  const { title, createdAt, updatedAt, body, firstname, lastname } = page;

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2>{title}</h2>
      <span>
        By {`${firstname} ${lastname}. `}
        {`Created at: ${getDateInCorrectFormat(
          createdAt,
        )}, Updated at: ${getDateInCorrectFormat(updatedAt)}`}
      </span>
      <p>{body}</p>
    </div>
  );
};

export default SinglePostPage;
