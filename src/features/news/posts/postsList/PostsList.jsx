import useNewsListData from 'hooks/useNewstListData';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import PostsItem from 'features/news/posts/postsItem/PostsItem';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';

const PostsList = () => {
  const { data, getAdditionallyLoadedData } = useNewsListData('posts');

  useInfiniteScroll(getAdditionallyLoadedData);

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
      <ul
        className="px-2 pt-10
                  lg:px-20
                  xl:px-40"
      >
        {newsItems}
      </ul>
      <LoadMoreButtonView
        onClick={getAdditionallyLoadedData}
        entity="posts"
        label="Posts"
      />
    </ComponentInitialStatus>
  );
};

export default PostsList;
