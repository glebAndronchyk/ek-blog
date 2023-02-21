import PostsList from 'features/news/posts/postsList/PostsList';
import useGetInitialData from 'hooks/useGetInitialData';
import { getInitialUserRelatedData } from 'redux/slices/postsListSlice';

const UserPosts = () => {
  const { initialLoading } = useGetInitialData('posts', getInitialUserRelatedData);

  return <PostsList initialLoading={initialLoading} />;
};

export default UserPosts;
