import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
