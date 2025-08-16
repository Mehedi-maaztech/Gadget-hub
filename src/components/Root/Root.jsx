import { Outlet } from "react-router";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AddToCartContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const AddToWishList = createContext();

const Root = () => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    return (
        <div className="w-11/12 mx-auto py-10">
            <AddToWishList.Provider value={[wishlist, setWishlist]}>
                <AddToCartContext.Provider value={[cart, setCart]}>
                    <Navbar cart={cart} wishlist={wishlist}></Navbar>
                    <div>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </AddToCartContext.Provider>
            </AddToWishList.Provider>
        </div>
    );
};

export default Root;