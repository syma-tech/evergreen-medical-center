import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Root = () => {
  return (
    <div className="">
      <div className="mx-auto px-20">
        <Header />
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div className="bg-base-200">
        <Footer />
      </div>
    </div>
  );
};

export default Root;
