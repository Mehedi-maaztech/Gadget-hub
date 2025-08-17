import { NavLink, Link } from 'react-router';
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = ({cart, wishlist}) => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
    </>
    //console.log(cart.lenght)
    return (
        <div>
            <div className="navbar bg-purple-800 shadow-sm text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 text-black hover rounded-box z-1 top-15 mt-3 w-52 p-2 shadow">
                                {links}
                        </ul>
                    </div>
                    <a className="btn border-0 shadow-none text-white logo-btn text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <Link to="/dashboard" className='relative'>
                        <span className='text-white font-bold p-2 '>
                       <span className='absolute top-4 left-2 text-amber-800 bg-base-300 w-[10px] rounded-full text-[10px] text-center'>{cart.length}</span> 
                    <CiShoppingCart/></span>
                    </Link>
                    <Link to="/dashboard" className='relative'>
                        <span className='text-white font-bold p-2'>
                            <span className='absolute top-4 left-2 text-amber-800 bg-base-300 w-[10px] rounded-full text-[10px] text-center'>{wishlist.length}</span> 
                        <CiHeart /></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;