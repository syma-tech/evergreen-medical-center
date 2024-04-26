import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="mx-auto px-20">
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
