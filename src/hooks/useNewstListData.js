import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getAdditionalPostsData, postsStateReseted } from 'redux/slices/postsListSlice';
import { getAdditionalAnnouncementsData, announcementsStateReseted } from 'redux/slices/announcementsListSlice';
import { getAdditionalCommentsData, commentsStateReseted } from 'redux/slices/commentsSlice';

const storeActions = {
  posts: {
    stateReset: postsStateReseted,
    getAdditionalData: getAdditionalPostsData,
  },
  announcements: {
    stateReset: announcementsStateReseted,
    getAdditionalData: getAdditionalAnnouncementsData,
  },
  comments: {
    stateReset: commentsStateReseted,
    getAdditionalData: getAdditionalCommentsData,
  },
};

const useNewsListData = (entity, postId = null) => {
  const { data, page } = useSelector(state => state[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(storeActions[entity].stateReset());
  }, []);

  const clickHandler = () => {
    return dispatch(storeActions[entity].getAdditionalData([postId, page]));
  };

  return {
    data,
    clickHandler,
  };
};

export default useNewsListData;
