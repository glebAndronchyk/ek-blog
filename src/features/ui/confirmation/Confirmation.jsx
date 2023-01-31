import { useDispatch, useSelector } from 'react-redux';
import { modalClosed } from 'redux/slices/modalSlice';

import Button from 'features/ui/button/Button';
import { tryToDeletePost } from 'redux/slices/postsListSlice';
import { REJECTED } from 'helpers/loadingStatus';

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
      <span className="mb-4 text-xl text-black">Are you sure?</span>
      <div className="flex justify-evenly w-full">
        <Button
          onClick={onConfirm}
          className="duration-300 bg-emerald-600 p-2 rounded-[10px] max-w-[48px] w-full text-black hover:bg-emerald-400"
        >
          YES
        </Button>
        <Button
          onClick={onDecline}
          className="duration-300 bg-app-red p-2 rounded-[10px] max-w-[48px] w-full text-black hover:bg-[#DE8193]"
        >
          NO
        </Button>
      </div>
    </div>
  );
};

export default Confirmation;
