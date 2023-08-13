import { Outlet } from "react-router-dom";

import { Navbar } from "../components/Navbar";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className=" px-6 py-20">
        <Outlet />
      </div>
    </>
  );
};
