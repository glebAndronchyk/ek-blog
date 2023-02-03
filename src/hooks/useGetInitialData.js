import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useGetInitialData = (entity, action, id = null) => {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector(state => state[entity]);

  useEffect(() => {
    dispatch(action(id));
  }, []);

  return {
    initialLoading,
  };
};

export default useGetInitialData;
