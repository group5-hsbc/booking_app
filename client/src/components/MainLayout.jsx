import { Outlet } from "react-router-dom";
import "./style/MainLayout.css";
const MainLayout = () => {
  return (
    <main className="main__layout">
      <Outlet />
    </main>
  );
};

export default MainLayout;
