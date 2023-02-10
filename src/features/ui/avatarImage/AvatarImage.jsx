import PropTypes from 'prop-types';

const AvatarImage = props => {
  const { src, className } = props;

  return (
    <img
      src={src}
      alt="avatar"
      className={className}
    />
  );
};

AvatarImage.propTypes = {
  src: PropTypes.string,
  className: PropTypes.string.isRequired,
};

export default AvatarImage;
