
const Dashboard = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold"> Dashboard </h1>
                        <p className="py-6">
                            Explore the latest Gadgets of our store
                        </p>
                        <div className="flex">
                            <button className="btn btn-primary">Cart</button>
                            <button className="btn btn-primary">Whish List</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;