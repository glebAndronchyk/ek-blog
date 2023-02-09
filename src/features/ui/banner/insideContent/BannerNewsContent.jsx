import PropTypes from 'prop-types';

const BannerNewsContent = props => {
  const { title, body } = props;

  return (
    <>
      <h2 className="text-7xl font-[600] mb-5 text-black">{title}</h2>
      <p className="text-blue-200 text-2xl">{body}</p>
    </>
  );
};

BannerNewsContent.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  body: PropTypes.object.isRequired,
};

export default BannerNewsContent;
