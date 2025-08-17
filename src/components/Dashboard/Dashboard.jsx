import { useContext, useEffect, useState } from "react";
import { AddToCartContext, AddToWishList } from "../Root/Root";
import Accesory from "../Accesory/Accesory";
import groupImg from '../../assets/Group.png';
const Dashboard = () => {
    const [cart, setCart] = useContext(AddToCartContext);
    const [wishlist] = useContext(AddToWishList);

    // state to track which tab is active
    const [activeTab, setActiveTab] = useState("cart"); // default = cart

    // state to track total amount of cart
    const [totalAmount, setTotalAmount] = useState(0);

    // calculate total whenever cart changes
    useEffect(() => {
        const newTotal = cart.reduce((sum, item) => sum + item.price, 0);
        setTotalAmount(newTotal);
    }, [cart]);

    useEffect(()=> {
        document.title = "Awesome Gadgets - Dashboard"
    },[])

    return (
        <div>
            <div>
                <div className="hero bg-base-200 min-h-96 my-10">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">Dashboard</h1>
                            <p className="py-6">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                                quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <div className="flex justify-center gap-10">
                                <button
                                    className={`btn btn-soft rounded-full w-56 ${activeTab === "cart" ? "btn-primary" : "btn-outline"
                                        }`}
                                    onClick={() => setActiveTab("cart")}
                                >
                                    Cart
                                </button>

                                <button
                                    className={`btn btn-soft rounded-full w-56 ${activeTab === "wishlist" ? "btn-primary" : "btn-outline"
                                        }`}
                                    onClick={() => setActiveTab("wishlist")}
                                >
                                    Wish List
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Buttons */}


            {/* Total Button & Display */}
            {activeTab === "cart" ?
                (<div className="mt-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Cart</h2>
                    </div>
                    <div className="flex gap-5">
                        <p className="text-2xl font-bold">Total Cost : ${totalAmount}</p>
                        <button onClick={() => document.getElementById('my_modal_4').showModal()}>
                            <button className="btn btn-soft btn-primary rounded-full px-5" onClick={() => setCart([])} htmlFor="my_modal_7">Purches</button>
                        </button>
                    </div>
                </div>)
                :
                <div className="mt-4 flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">Wish List</h2>
                    </div>
                </div>
            }

            {/* Show data based on active tab */}
            <div className="mt-6">
                {activeTab === "cart" &&
                    cart.map((item) => (
                        // <div key={idx} className="border p-2 m-2 rounded">
                        //     {item.product_title} - ${item.price}
                        // </div>
                        <Accesory key={item.product_id} item={item}></Accesory>
                    ))}

                {activeTab === "wishlist" &&
                    wishlist.map((item) => (
                        // <div key={idx} className="border p-2 m-2 rounded">
                        //     {item.product_title} - ${item.price}
                        // </div>
                        <Accesory key={item.product_id} item={item}></Accesory>
                    ))}
            </div>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-2xs max-w-5xl flex flex-col items-center">
                    <figure className="mx-auto">
                        <img
                            src={groupImg}
                            alt="Shoes" />
                    </figure>
                    <p className="py-4"><small>Thanks for purchesing</small></p>
                    <p>Total : {totalAmount}</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button, it will close the modal */}
                            <button className="btn rounded-full px-20">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );

};

export default Dashboard;