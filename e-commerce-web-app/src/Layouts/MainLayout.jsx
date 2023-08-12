import { Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <div className=" px-6 py-20">
      <Outlet />
    </div>
  );
};
