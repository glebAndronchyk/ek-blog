import Banner from 'features/ui/banner/Banner';
import PostsList from 'features/posts/postsList/PostsList';
import CreateNewsButton from 'features/ui/buttons/createNewsButton/CreateNewsButton';
import useGetInitialData from 'hooks/useGetInitialData';
import { getInitialData } from 'redux/slices/postsListSlice';

import PostsBg from 'assets/images/posts-banner-bg.jpg';

const Posts = () => {
  const { initialLoading } = useGetInitialData('posts', getInitialData);

  return (
    <div className="flex flex-col">
      <Banner
        label="Posts"
        image={PostsBg}
      >
        <span>Read them, or add them</span>
      </Banner>
      <CreateNewsButton
        label="posts"
        name="post"
      />
      <PostsList initialLoading={initialLoading} />
    </div>
  );
};
export default Posts;
