import './banner.css';
import PropTypes from 'prop-types';

const Banner = props => {
  const { label, children } = props;

  return (
    <section className="relative posts-banner-background z-0 flex items-center justify-center">
      <div className="flex flex-col max-w-[640px] w-full items-center pt-24 pb-16">
        <h2 className="text-7xl font-[600] mb-5 text-black">{label}</h2>
        <p className="text-blue-200 text-2xl">{children}</p>
      </div>
    </section>
  );
};

Banner.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Banner;
