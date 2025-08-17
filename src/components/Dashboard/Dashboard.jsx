import { useContext, useEffect, useState } from "react";
import { AddToCartContext, AddToWishList } from "../Root/Root";
import Accesory from "../Accesory/Accesory";

const Dashboard = () => {
    const [cart, setCart] = useContext(AddToCartContext);
    const [wishlist, setWishlist] = useContext(AddToWishList);

    const [totalamout, setTotalamount] = useState([]);
    
    useEffect(()=> {
        if(cart.length > 0){
            let latestamout = cart[cart.length - 1].price;
            latestamout += latestamout;
            setTotalamount(latestamout)
        }
    },[])
    
    function total(){
        console.log(totalamout);
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold"> Dashboard </h1>
                        <p className="py-6">
                            Explore the latest Gadgets of our store
                        </p>
                        <div className="flex justify-center gap-10">
                            <button className="btn btn-soft btn-primary rounded-full w-56">Cart</button>
                            <button className="btn btn-soft btn-primary rounded-full w-56">Whish List</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cartwishData">
                <div className="head flex justify-between">
                    <div>
                        <button className="btn btn-accent" onClick={total}>total</button>
                         <h2>Cart</h2>
                    </div>
                    <div>
                        <p>{totalamout}</p>
                    </div>
                </div>
                <div>
                    {
                        cart.map( item => <Accesory key={item.product_id} item={item}></Accesory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;