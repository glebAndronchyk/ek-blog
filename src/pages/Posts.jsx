import Banner from 'features/ui/banner/Banner';
import PostsList from 'features/news/posts/postsList/PostsList';
import NewsFormButton from 'features/news/newsControl/newsForm/newsFormButton/NewsFormButton';
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
      <NewsFormButton
        label="posts"
        name="post"
      />
      <PostsList initialLoading={initialLoading} />
    </div>
  );
};
export default Posts;
