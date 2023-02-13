import HeaderLinksList from 'features/ui/header/headerLinksList/HeaderLinksList';
import HeaderLogo from 'features/ui/header/headerLogo/HeaderLogo';
import HeaderIsAuthContent from 'features/ui/header/headerIsAuthContent/HeaderIsAuthContent';
import Hamburger from 'features/ui/header/hamburger/Hamburger';
import useWindowSize from 'hooks/useWindowSize';

const Header = () => {
  const { width } = useWindowSize();
  const shownCondition = width < 640;

  return (
    <header
      className="relative px-4 py-3 z-10 flex justify-between items-center bg-blue-100 shadow-lg shadow-blue-100
                 sm:px-16"
    >
      <div className="flex justify-between">
        <HeaderLogo />
        <HeaderLinksList shownCondition={shownCondition} />
      </div>
      <HeaderIsAuthContent shownCondition={shownCondition} />
      <Hamburger shownCondition={shownCondition} />
    </header>
  );
};

export default Header;
