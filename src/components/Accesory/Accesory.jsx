import { Link } from "react-router";

const Accesory = ({ item }) => {
    const {product_id, product_image, product_title, price } = item;
    return (
        <Link to={`accesory/${product_id}`}>
            <div className="card bg-base-100 shadow-xl m-5">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="w-65 rounded-2xl h-52" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">View Details</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Accesory;