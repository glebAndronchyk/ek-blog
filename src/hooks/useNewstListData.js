import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAdditionalPostsData, postsStateReseted } from 'redux/slices/postsListSlice';
import { getAdditionalAnnouncementsData, announcementsStateReseted } from 'redux/slices/announcementsListSlice';

const storeActions = {
  posts: {
    stateReset: postsStateReseted,
    getAdditionalData: getAdditionalPostsData,
  },
  announcements: {
    stateReset: announcementsStateReseted,
    getAdditionalData: getAdditionalAnnouncementsData,
  },
};

const useNewsListData = entity => {
  const { data, page, showLoadMoreButton } = useSelector(state => state[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(storeActions[entity].stateReset());
  }, []);

  const clickHandler = () => {
    return dispatch(storeActions[entity].getAdditionalData(page));
  };

  return {
    data,
    showLoadMoreButton,
    clickHandler,
  };
};

export default useNewsListData;
