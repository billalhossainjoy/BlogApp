import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="h-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
