import Banner from '../components/banner/Banner';
import PostsList from '../components/postsList/PostsList';

import PostsBg from '../assets/images/posts-banner-bg.jpg';

const Posts = () => {
  return (
    <>
      <Banner
        label="Posts"
        image={PostsBg}
      >
        <span>Read them, or add them</span>
      </Banner>
      <PostsList />
    </>
  );
};
export default Posts;
