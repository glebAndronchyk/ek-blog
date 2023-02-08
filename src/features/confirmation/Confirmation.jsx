import { useDispatch, useSelector } from 'react-redux';
import { modalClosed } from 'redux/slices/modalSlice';
import { useEffect } from 'react';

import View from 'features/confirmation/View';
import Spinner from 'features/ui/spinner/Spinner';
import { tryToDeletePost, userActionLoadingReseted } from 'redux/slices/postsListSlice';
import { tryToDeleteAnnouncement } from 'redux/slices/announcementsListSlice';
import { tryToDeleteComment } from 'redux/slices/commentsSlice';
import { IDLE, LOADING, REJECTED } from 'helpers/loadingStatus';

const deleteFunctions = {
  posts: tryToDeletePost,
  announcements: tryToDeleteAnnouncement,
  comments: tryToDeleteComment,
};

const Confirmation = () => {
  const dispatch = useDispatch();
  const { configuration } = useSelector(state => state.modal);
  const { id, entity } = configuration;
  const { userActionLoading } = useSelector(state => state[entity]);

  useEffect(() => {
    dispatch(userActionLoadingReseted());
  }, []);

  const onConfirm = () => {
    dispatch(deleteFunctions[entity](id)).then(() => (userActionLoading === IDLE ? dispatch(modalClosed()) : null));
  };

  const onDecline = () => {
    dispatch(modalClosed());
  };

  return (
    <div className="flex absolute flex-col justify-between bg-gray-200 items-center rounded-[20px] max-w-md w-full py-10">
      {userActionLoading === LOADING ? (
        <Spinner />
      ) : (
        <View
          loading={userActionLoading}
          onConfirm={onConfirm}
          onDecline={onDecline}
        />
      )}
    </div>
  );
};

export default Confirmation;
