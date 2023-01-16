import {Outlet} from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      <main className='min-h-[calc(100vh-80px-24px)]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
