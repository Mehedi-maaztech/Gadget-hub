
import { useLoaderData } from "react-router";
import Accesory from "../Accesory/Accesory";

const Accesories = () => {
    const allItems = useLoaderData();
    const categories = [...new Set(allItems.map(item => item.category))];

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex py-10">
                <div className="categories flex flex-col w-4/12">
                    {
                        categories.map((item, idx) => 
                        <button key={idx} 
                        className="btn btn-base w-40 rounded-full m-2 hover:bg-purple-800 hover:text-white transition-normal">{item}</button>
                        )
                    }
                </div>
                <div className="categories-items w-8/12 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {
                        allItems.map(item => <Accesory key={item.product_id} item={item}></Accesory>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Accesories;