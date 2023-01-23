import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Banner from '../components/banner/Banner';
import { ExtendedWithInitialLoadingPostsList } from '../hocs/withInitialLoadingStatus';
import { getInitialData } from '../slices/postsListSlice';
import PostsBg from '../assets/images/posts-banner-bg.jpg';

const Posts = () => {
  const dispatch = useDispatch();
  const { initialLoading } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getInitialData());
  }, []);

  return (
    <>
      <Banner
        label="Posts"
        image={PostsBg}
      >
        <span>Read them, or add them</span>
      </Banner>
      <ExtendedWithInitialLoadingPostsList initialLoading={initialLoading} />
    </>
  );
};
export default Posts;
