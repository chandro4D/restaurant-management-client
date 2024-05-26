import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";


const Main = () => {
    const location = useLocation();
    console.log(location);
    const noHeader = location.pathname.includes('/login')
    const noFooter = location.pathname.includes('/register')
    return (
        <div>
            {noHeader || noFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeader || noFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;