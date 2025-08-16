
import { useLoaderData } from "react-router";

const Accesories = () => {
    const allItems = useLoaderData();
    const categories = [...new Set(allItems.map(item => item.category))];
    
    console.log(categories);
    return (
        <div>
            <h1 className="text-5xl text-center font-bold">Explore Cutting-Edge Gadgets</h1>
            <div className="flex">
                <div className="categories flex flex-col w-4/12">
                    {
                        categories.map((item, idx) => 
                        <button key={idx} 
                        className="btn btn-base w-40 rounded-full m-2 hover:bg-purple-800 hover:text-white transition-normal">{item}</button>
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