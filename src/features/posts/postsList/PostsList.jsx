import useNewsListData from 'hooks/useNewstListData';
import LoadMoreButton from 'features/loadMore/loadMoreButton/LoadMoreButton';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import PostsItem from '../postsItem/PostsItem';

const PostsList = () => {
  const { data, showLoadMoreButton, clickHandler } = useNewsListData('posts');

  const newsItems = data.map(item => {
    return (
      <PostsItem
        key={item.id}
        to={`/posts/${item.id}`}
        id={item.id}
        creatorID={item.userId}
        itemData={{
          createdAt: item.createdAt,
          title: item.title,
          body: item.body,
        }}
      />
    );
  });

  return (
    <ComponentInitialStatus entity="posts">
      <ul className="px-40 pt-10">{newsItems}</ul>
      {showLoadMoreButton ? (
        <LoadMoreButton
          onClick={clickHandler}
          entity="posts"
        />
      ) : (
        <span className="block text-center">Posts Ended</span>
      )}
    </ComponentInitialStatus>
  );
};

export default PostsList;
