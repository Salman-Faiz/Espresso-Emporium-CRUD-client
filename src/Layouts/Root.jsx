import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default Root;
