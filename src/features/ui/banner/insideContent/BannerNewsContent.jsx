import PropTypes from 'prop-types';

const BannerNewsContent = props => {
  const { title, body } = props;

  return (
    <>
      <h2
        className="text-5xl font-[600] mb-5 text-black max-w-full break-words text-center
                   sm:text-7xl"
      >
        {title}
      </h2>
      <p
        className="text-blue-200 text-xl
                    sm:text-2xl"
      >
        {body}
      </p>
    </>
  );
};

BannerNewsContent.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  body: PropTypes.object.isRequired,
};

export default BannerNewsContent;
