import { useLoaderData, useNavigate, useParams } from "react-router";
import { CiStar } from "react-icons/ci";
import { useContext } from "react";
import { AddToCartContext, AddToWishList } from "../Root/Root";

const AccesoryDetails = () => {
    const itemData = useLoaderData();
    const { product_id } = useParams();
    const [cart, setCart] = useContext(AddToCartContext);
    const [wishlist, setWishlist] = useContext(AddToWishList);

    const productDetails = itemData.find(item => item.product_id === product_id)

    const { product_title, product_image, price, description, specification, availability, rating } = productDetails;

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleAddToCart = (productDetails) => {
        setCart([...cart, productDetails]);
        console.log(cart)
    }
    const handleAddToWishlist = (productDetails) => {
        setWishlist([...wishlist, productDetails])
        console.log(wishlist);
    }  
    return (

        <div>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure>
                    <img
                        src={product_image}
                        alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>{price}</p>
                    <button>{availability}</button>
                    <p>{description}</p>
                    <p className="font-bold">Specification : </p>
                    <ol>
                        {
                            specification.map((spec, idx) => <li key={idx}>{spec}</li>)
                        }
                    </ol>
                    <p className="font-bold">Ratings : </p>
                    <p className="flex items-center text-1xl">{rating} <CiStar /></p>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleAddToCart(productDetails)}>Add to cart</button>
                        <button className="btn btn-white" onClick={() => handleAddToWishlist(productDetails)}>Wish List</button>
                    </div>
                </div>
            </div>
            <button className="btn btn-info my-10" onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default AccesoryDetails;