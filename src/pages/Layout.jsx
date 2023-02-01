import { Outlet } from 'react-router-dom';

import Header from 'features/ui/header/Header';
import Footer from 'features/ui/footer/Footer';
import Modal from 'features/ui/modal/Modal';
import LoginForm from 'features/login/loginForm/LoginForm';

const Layout = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-4">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Modal>
        <LoginForm />
      </Modal>
    </>
  );
};

export default Layout;
