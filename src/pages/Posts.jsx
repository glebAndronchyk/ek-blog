import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Banner from 'features/ui/banner/Banner';
import PostsList from 'features/posts/postsList/PostsList';
import { getInitialData } from 'redux/slices/postsListSlice';
import PostsBg from 'assets/images/posts-banner-bg.jpg';

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
      <PostsList initialLoading={initialLoading} />
    </>
  );
};
export default Posts;
