import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="bg-white py-[80px]">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
