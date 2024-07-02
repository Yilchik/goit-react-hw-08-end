import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
        {children}
      </main>
    </>
  );
};

export default Layout;
