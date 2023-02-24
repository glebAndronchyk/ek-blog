import PropTypes from 'prop-types';

import useNewsListData from 'hooks/useNewstListData';
import useInfiniteScroll from 'hooks/useInfiniteScroll';
import ComponentInitialStatus from 'features/ui/componentInitialStatus/ComponentInitialStatus';
import PostsItem from 'features/news/posts/postsItem/PostsItem';
import LoadMoreButtonView from 'features/ui/buttons/loadMoreButton/loadMoreButtonView/LoadMoreButtonView';

const PostsList = props => {
  const { isUserProfile } = props;
  const { data, getAdditionallyLoadedData } = useNewsListData('posts', null, isUserProfile);
  const ref = useInfiniteScroll(getAdditionallyLoadedData);

  const newsItems = data.map((item, index) => {
    const itemProps = {
      to: `/posts/${item.id}`,
      id: item.id,
      creatorID: item.userId,
      itemData: {
        createdAt: item.createdAt,
        title: item.title,
        body: item.body,
      },
    };
    if (index === data.length - 1) {
      return (
        <PostsItem
          {...itemProps}
          key={item.id}
          ref={ref}
        />
      );
    }
    return (
      <PostsItem
        {...itemProps}
        key={item.id}
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

PostsList.propTypes = {
  isUserProfile: PropTypes.bool,
};

export default PostsList;
