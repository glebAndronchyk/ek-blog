import PostsList from 'features/news/posts/postsList/PostsList';
import useGetInitialData from 'hooks/useGetInitialData';
import { getInitialUserRelatedData } from 'redux/slices/postsListSlice';

const UserPosts = () => {
  useGetInitialData('posts', getInitialUserRelatedData);

  return <PostsList isUserProfile />;
};

export default UserPosts;
