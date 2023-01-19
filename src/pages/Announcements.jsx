import Banner from '../components/banner/Banner';
import PostsList from '../components/postsList/PostsList';

const Announcements = () => {
  return (
    <>
      <Banner label="Announcements">
        <span>Important news</span>
      </Banner>
      <PostsList />
    </>
  );
};
export default Announcements;
