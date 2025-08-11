import { useLoaderData } from "react-router";

const Accesories = () => {
     const allItems = useLoaderData();

    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div>
                <div className="categories">
                    {
                        allItems.map(cat => <button key={cat.product_id}>{cat.category}</button>)
                    }
                </div>
                <div className="categories-items">

                </div>
            </div>
        </div>
    );
};

export default Accesories;