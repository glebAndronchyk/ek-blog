import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import getSinglePostData from '../services/getSinglePostData';
import getDateInCorrectFormat from '../helpers/getDateInCorrectFormat';

const SinglePostPage = () => {
  const { postId } = useParams();
  const [page, setPage] = useState({
    title: '',
    body: '',
    createdAt: '',
    updatedAt: '',
    userId: null,
  });

  useEffect(() => {
    const data = async () => {
      const response = await getSinglePostData(postId);
      const { title, body, createdAt, updatedAt, userId } = response[0];
      setPage({
        title,
        body,
        createdAt,
        updatedAt,
        userId,
      });
    };
    data();
  }, []);

  return (
    <div className="w-8/12 mx-auto">
      <h2>{page.title}</h2>
      <span>
        by {page.userId}: {getDateInCorrectFormat(page.createdAt)}/
        {getDateInCorrectFormat(page.updatedAt)}
      </span>
      <p>{page.body}</p>
    </div>
  );
};

export default SinglePostPage;
