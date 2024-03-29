import getDateInCorrectFormat from 'helpers/getDateInCorrectFormat';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import useGetPost from 'hooks/useGetPost';
import onEditChecker from 'helpers/onEditChecker';
import { getUserDataFromStorage } from 'helpers/localStorage';
import { LOADING, REJECTED } from 'helpers/loadingStatus';
import BackButton from 'features/ui/buttons/backButton/BackButton';
import NewsController from 'features/news/newsControl/newsController/NewsController';
import Spinner from 'features/ui/spinner/Spinner';
import ErrorPlug from 'features/ui/errorPlug/ErrorPlug';

const View = () => {
  const { postId } = useParams();
  const { page, author, getData, loading } = useGetPost(postId);
  const { title, createdAt, updatedAt, body } = page;
  const { isAuth } = useSelector(state => state.user);
  const { userActionLoading } = useSelector(state => state.posts);
  const currentUserId = getUserDataFromStorage()?.id;
  const updatedAtInCorrectFormat = getDateInCorrectFormat(updatedAt);
  const updated = onEditChecker({
    condition: updatedAtInCorrectFormat,
    output: `, Updated At: ${updatedAtInCorrectFormat}`,
  });
  const { firstname, lastname, userId: creatorId } = author;

  useEffect(() => {
    getData();
  }, [userActionLoading]);

  if (loading === LOADING) return <Spinner wrapperClassName="pt-20" />;
  if (loading === REJECTED) return <ErrorPlug />;

  return (
    <section className="bg-white px-4 py-2 mb-2">
      <h2 className="font-[600] text-black relative mb-2 single-post-deco before:bg-app-red">
        <span className="text-2xl md:text-3xl">{title}</span>
        <div>
          <BackButton />
          <NewsController
            modalConfiguration={{
              entity: 'posts',
              name: 'Post',
              id: +postId,
              createdAt,
              title,
              body,
              isSinglePost: true,
            }}
            isAuth={isAuth}
            creatorID={creatorId}
            currentUserID={currentUserId}
          />
        </div>
      </h2>
      <span className="block pl-4 mb-2 font-[400] text-gray-500 text-base">
        By: {`${firstname} ${lastname}. `}
        {`Created at: ${getDateInCorrectFormat(createdAt)} ${updated}`}
      </span>
      <p
        className="relative text-md single-post-deco before:bg-blue-100 break-words
                   md:text-lg"
      >
        {body}
      </p>
    </section>
  );
};

export default View;
