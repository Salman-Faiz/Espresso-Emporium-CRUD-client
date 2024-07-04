import { Outlet } from "react-router-dom";
import Header from '../Pages/Shared/Header/Header'



const Root = () => {
    return (
        <div>
            <Header></Header>
            <Outlet/>
        </div>
    );
};

export default Root;