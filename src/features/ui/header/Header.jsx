import HeaderLinksList from 'features/ui/header/headerLinksList/HeaderLinksList';
import HeaderLogo from 'features/ui/header/headerLogo/HeaderLogo';
import HeaderIsAuthContent from 'features/ui/header/headerIsAuthContent/HeaderIsAuthContent';

const Header = () => {
  return (
    <header className="relative z-10 px-16 py-3 flex justify-between items-center bg-blue-100 shadow-lg shadow-blue-100">
      <div className="flex justify-between">
        <HeaderLogo />
        <HeaderLinksList />
      </div>
      <HeaderIsAuthContent />
    </header>
  );
};

export default Header;
