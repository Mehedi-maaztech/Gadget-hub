import { NavLink } from 'react-router';
import './Navbar.css'
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {

    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink>Dashboard</NavLink></li>
    </>
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <span className='bg-base-300 text-black p-2 rounded-full'><CiShoppingCart/></span>
                    <span className='bg-base-300 text-black p-2 rounded-full'><CiHeart /></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;