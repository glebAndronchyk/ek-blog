import Banner from '../components/banner/Banner';
import PostsList from '../components/postsList/PostsList';

const Posts = () => {
  return (
    <>
      <Banner label="Posts">
        <span>Read them, or add them</span>
      </Banner>
      <PostsList />
    </>
  );
};
export default Posts;
