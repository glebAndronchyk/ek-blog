import { useDispatch, useSelector } from 'react-redux';
import { modalClosed } from 'redux/slices/modalSlice';

import View from 'features/ui/confirmation/View';
import Spinner from 'features/ui/spinner/Spinner';
import { tryToDeletePost } from 'redux/slices/postsListSlice';
import { LOADING, REJECTED } from 'helpers/loadingStatus';

const deleteFunctions = {
  posts: tryToDeletePost,
};

const Confirmation = () => {
  const dispatch = useDispatch();
  const { modalConfiguration } = useSelector(state => state.modal);
  const { id, entity } = modalConfiguration;
  const { deletingLoading } = useSelector(state => state[entity]);

  const onConfirm = () => {
    dispatch(deleteFunctions[entity](id)).then(() => (deletingLoading !== REJECTED ? dispatch(modalClosed()) : null));
  };

  const onDecline = () => {
    dispatch(modalClosed());
  };

  return (
    <div className="flex absolute flex-col justify-between bg-gray-200 items-center rounded-[20px] max-w-md w-full py-10">
      {deletingLoading === LOADING ? (
        <Spinner className="pt-0" />
      ) : (
        <View
          loading={deletingLoading}
          onConfirm={onConfirm}
          onDecline={onDecline}
        />
      )}
    </div>
  );
};

export default Confirmation;
