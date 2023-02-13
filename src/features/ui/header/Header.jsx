import HeaderLinksList from 'features/ui/header/headerLinksList/HeaderLinksList';
import HeaderLogo from 'features/ui/header/headerLogo/HeaderLogo';
import HeaderIsAuthContent from 'features/ui/header/headerIsAuthContent/HeaderIsAuthContent';

const Header = () => {
  return (
    <header
      className="relative px-4 py-3 z-10 flex justify-between items-center bg-blue-100 shadow-lg shadow-blue-100
                 md:px-16"
    >
      <div className="flex justify-between">
        <HeaderLogo />
        <HeaderLinksList />
      </div>
      <HeaderIsAuthContent />
    </header>
  );
};

export default Header;
