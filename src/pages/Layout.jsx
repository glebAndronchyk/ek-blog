import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="grow pb-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
