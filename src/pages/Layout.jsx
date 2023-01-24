import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Modal from '../components/modal/Modal';
import LoginForm from '../components/loginForm/LoginForm';

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
