import { Outlet } from "react-router-dom";
import Footer from "@/Common/Footer/Footer";
import Navbar from "@/Common/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <div className="">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
