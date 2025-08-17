
import { useLoaderData } from "react-router";
import Accesory from "../Accesory/Accesory";
import { useState } from "react";

const Accesories = () => {
    const allItems = useLoaderData();
    const categories = [...new Set(allItems.map(item => item.category))];

    const [selectedCategory, setSelectedCategory] = useState(null);

    const filterdProduct = selectedCategory ? allItems.filter(p => p.category === selectedCategory) : allItems;

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex py-10">
                <div className="categories flex flex-col w-2/12">
                    <button
                        onClick={() => setSelectedCategory(null)}   // reset to all
                        className={`btn btn-base w-40 rounded-full m-2 transition-normal ${selectedCategory === null
                                ? "bg-purple-800 text-white"
                                : "hover:bg-purple-800 hover:text-white"
                            }`}
                    >
                        All
                    </button>
                    {
                        categories.map((item, idx) =>
                            <button key={idx}
                                onClick={() => setSelectedCategory(item)}
                                className={`btn btn-base w-40 rounded-full m-2 transition-normal 
                            ${selectedCategory === item ? "bg-purple-800 text-white" : "hover:bg-purple-800 hover:text-white"} `}>{item}</button>
                        )
                    }
                </div>
                <div className="categories-items w-10/12 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        filterdProduct.map(item => <Accesory key={item.product_id} item={item}></Accesory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accesories;