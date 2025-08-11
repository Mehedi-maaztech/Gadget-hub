import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto py-10">
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;