import { Outlet } from "react-router-dom";
import Header from "../Component/Header-&-Footer/Header/Header";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className=" min-h-[calc(100vh-300px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
