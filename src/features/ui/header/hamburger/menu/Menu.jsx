import PropTypes from 'prop-types';

import HeaderLinksList from 'features/ui/header/headerLinksList/HeaderLinksList';
import HeaderIsAuthContent from 'features/ui/header/headerIsAuthContent/HeaderIsAuthContent';

const Menu = props => {
  const { shown, setShown } = props;

  const handleBackgroundClick = event => {
    if (event.target === event.currentTarget) {
      return setShown(!shown);
    }
    return null;
  };

  return (
    shown && (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
      <div
        className="fixed inset-0 flex justify-end bg-black/[.5]"
        onClick={handleBackgroundClick}
      >
        <section className="w-[50%] h-full bg-blue-100 flex flex-col justify-between items-center border-l-2 border-l-app-red py-2">
          <HeaderLinksList />
          <HeaderIsAuthContent />
        </section>
      </div>
    )
  );
};

Menu.propTypes = {
  shown: PropTypes.bool,
  setShown: PropTypes.func,
};

export default Menu;
