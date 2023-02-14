import useNewsListData from 'hooks/useNewstListData';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import PostsItem from 'features/news/posts/postsItem/PostsItem';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';

const PostsList = () => {
  const { data, clickHandler } = useNewsListData('posts');

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
      <ul className="px-2 lg:px-40 pt-10">{newsItems}</ul>
      <LoadMoreButtonView
        onClick={clickHandler}
        entity="posts"
        label="Posts"
      />
    </ComponentInitialStatus>
  );
};

export default PostsList;
