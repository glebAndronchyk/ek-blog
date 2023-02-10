import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Header from 'features/ui/header/Header';
import Footer from 'features/ui/footer/Footer';
import Modal from 'features/ui/modal/Modal';
import LoginForm from 'features/login/loginForm/LoginForm';
import CreateNewsForm from 'features/news/newsControl/createNews/createNewsForm/CreateNewsForm';
import Confirmation from 'features/confirmation/Confirmation';

const modalContent = {
  LoginForm: <LoginForm />,
  CreateNewsForm: <CreateNewsForm />,
  Confirmation: <Confirmation />,
};

const Layout = () => {
  const { contentToShow } = useSelector(state => state.modal);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow pb-4">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Modal>{modalContent[contentToShow]}</Modal>
    </>
  );
};

export default Layout;
