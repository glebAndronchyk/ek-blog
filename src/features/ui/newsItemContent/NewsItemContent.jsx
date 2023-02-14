import PropTypes from 'prop-types';

const NewsItemContent = props => {
  const { createdAt, title, body, imagePlug } = props;

  return (
    <>
      <div
        className="flex flex-col pl-1.5 py-4 max-w-full text-center
                    md:text-left
                    lg:max-w-[60%] w-full"
      >
        <span
          className="font-[400] text-gray-500 uppercase text-xs mb-7
                      2xl:text-base"
        >
          {createdAt}
        </span>
        <h3
          className="font-[600] text-black text-2xl mb-2.5 max-w-full break-words
                        2xl:text-3xl"
        >
          {title}
        </h3>
        <p
          className="text-lg text-gray-600 max-w-[1241px] break-words
                      2xl:text-lg 2xl:max-w-[90%]"
        >
          {body}
        </p>
      </div>
      <img
        className="hidden
                  lg:block lg:pl-1"
        src={imagePlug}
        alt="item"
      />
    </>
  );
};

export default NewsItemContent;

NewsItemContent.propTypes = {
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  imagePlug: PropTypes.string.isRequired,
};
