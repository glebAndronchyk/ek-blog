import PropTypes from 'prop-types';

import BannerNewsContent from 'features/ui/banner/insideContent/BannerNewsContent';
import BannerUserProfileContent from 'features/ui/banner/insideContent/BannerUserProfileContent';

import './banner.css';

const Banner = props => {
  const { label, children, image } = props;

  return (
    <section
      style={{ backgroundImage: `url(${image})` }}
      className="relative posts-banner-background z-0 flex items-center justify-center pt-24 pb-16"
      data-testid="banner-component"
    >
      <div className="flex flex-col max-w-[640px] w-full items-center">
        {children ? (
          <BannerNewsContent
            body={children}
            title={label}
          />
        ) : (
          <BannerUserProfileContent />
        )}
      </div>
    </section>
  );
};

Banner.propTypes = {
  label: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.object,
  image: PropTypes.string.isRequired,
};

export default Banner;
