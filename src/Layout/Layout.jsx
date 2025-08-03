import { Outlet } from "react-router-dom";
import Navbar from "../Common/nav";

const Layout = () => {
  return (
    <div>
      <div className="">
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
