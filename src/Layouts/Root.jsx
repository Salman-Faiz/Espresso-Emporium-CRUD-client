import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";
import Footer from "../Pages/Shared/Footer";

const Root = () => {
  return (
    <div className="font-customFont max-w-8xl mx-auto flex flex-col min-h-screen">
      <Header></Header>
      <div className="flex-grow">
         <Outlet/>   
        </div>
      
      <Footer></Footer>
    </div>
  );
};

export default Root;
