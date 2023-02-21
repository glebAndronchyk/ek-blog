import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  getAdditionalPostsData,
  getUserRelatedAdditionalPostsData,
  postsStateReseted,
} from 'redux/slices/postsListSlice';
import { getAdditionalAnnouncementsData, announcementsStateReseted } from 'redux/slices/announcementsListSlice';
import { getAdditionalCommentsData, commentsStateReseted } from 'redux/slices/commentsSlice';

const storeActions = {
  posts: {
    stateReset: postsStateReseted,
    getAdditionalData: getAdditionalPostsData,
    getUserRelatedAdditionalData: getUserRelatedAdditionalPostsData,
  },
  announcements: {
    stateReset: announcementsStateReseted,
    getAdditionalData: getAdditionalAnnouncementsData,
    // getUserRelatedAdditionalData: getUserRelatedAdditionalAnnouncementsData,
  },
  comments: {
    stateReset: commentsStateReseted,
    getAdditionalData: getAdditionalCommentsData,
  },
};

const useNewsListData = (entity, postId = null, isUserProfile = false) => {
  const { data, page } = useSelector(state => state[entity]);
  const dispatch = useDispatch();

  useEffect(() => {
    return () => dispatch(storeActions[entity].stateReset());
  }, []);

  const getAdditionallyLoadedData = () => {
    if (isUserProfile) {
      return dispatch(storeActions[entity].getUserRelatedAdditionalData(page));
    }
    return dispatch(storeActions[entity].getAdditionalData([postId, page]));
  };

  return {
    data,
    getAdditionallyLoadedData,
  };
};

export default useNewsListData;
