import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto bg-white pt-20 min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
