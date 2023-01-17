import Banner from '../components/banner/Banner';
import PostsContentSection from '../components/postsContentSection/PostsContentSection';

const Posts = () => {
  return (
    <>
      <Banner label="Posts">
        <span>Read them, or add them</span>
      </Banner>
      <PostsContentSection />
    </>
  );
};
export default Posts;
