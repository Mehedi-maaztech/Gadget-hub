import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

const Accesories = () => {
    const allItems = useLoaderData();
    const [categories, setCategory] = useState({});

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mehedi-maaztech/Gadget-hub/refs/heads/main/public/accesoriesCategories.json')
            .then(res => res.json())
            .then(data => setCategory(data.categories))
    }, [])
    console.log(categories);
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex">
                <div className="categories flex flex-col w-4/12">
                    {
                        categories.map(cat =>
                            <div className="text-center">
                                <button key={cat.category_id} className="btn btn-base w-40 rounded-full m-2 hover:bg-purple-800 hover:text-white transition-normal">{cat.category}</button>
                            </div>
                            )
                    }
                </div>
                <div className="categories-items w-8/12">
                    {
                        allItems.length
                    }
                </div>
            </div>
        </div>
    );
};

export default Accesories;