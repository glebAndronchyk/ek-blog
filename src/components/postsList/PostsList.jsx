import NewsItem from '../newsItem/NewsItem';

const PostsContentSection = () => {
  // EXAMPLE
  return (
    <ul className="px-40 pt-20">
      <NewsItem
        to="/posts"
        feedData={{
          createdAt: '2021-11-15T13:33:52.586Z',
          title: 'dsadsa',
          body: 'dsad',
        }}
      />
      <NewsItem
        to="/posts"
        feedData={{
          createdAt: '2021-11-15T13:33:52.586Z',
          title: 'dsadsa',
          body: 'dsad',
        }}
      />
    </ul>
  );
};

export default PostsContentSection;
