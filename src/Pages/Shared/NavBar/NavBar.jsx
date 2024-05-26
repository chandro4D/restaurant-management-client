import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(result => {

                Swal.fire({
                    icon: "success",
                    text: "LogOut successfully!",

                });
                console.log(result.user);
            })
            .catch()
    }
    const Links = <>
        <li className="text-xl"><Link to="/">Home</Link></li>
        <li className="text-xl"><Link to="/menu">Our Menu</Link></li>
        <li className="text-xl"><Link to="/ourShop">Our Shop</Link></li>
        <li className="text-xl"><Link to="/login">LogIn</Link></li>
        <li className="text-xl "><Link to="/register">Register</Link></li>
        {
            user ?
                <>
                    <div className="ml-[150px] tooltip tooltip-bottom mr-5" data-tip={user.displayName || user.email}  >
                        <img className="rounded-full w-14" src={user.photoURL || "https://web.programming-hero.com/static/media/profileImage.934e5b10.png"} />
                    </div>
                    <Link to=""><button onClick={handleSignOut} className="btn  bg-green-600 text-xl font-medium ">SING OUT</button></Link>

                </>
                :
                <>

                </>

        }

    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-20 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {Links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Restaurant Management</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default NavBar;