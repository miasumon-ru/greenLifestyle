import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import defaultUserIcon from '../../../assets/user.png'




const Navbar = () => {

    const { user, logOut } = useAuth()

    console.log(user)

    // handle Logout

    const handleLogOut = () => {

        logOut()
            .then(() => {
                // console.log("logout is successful")
            })



    }



    const links = <>

        <li> <NavLink to='/' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A] ' : ''} > Home </NavLink> </li>
        <li> <NavLink to='/apartment' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Apartment </NavLink> </li>

        <li> <NavLink to='/login' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Login </NavLink> </li>

        {/* <li> <NavLink to='/newRelease' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > New Release </NavLink> </li>

        <li> <NavLink to='/bestSeller' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Best Seller </NavLink> </li> */}

    </>




    return (
        <div className="navbar bg-base-100 workSans text-xl text-[#131313CC] ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">BookStore</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">



                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">

                            {
                                user ?  <img alt="User Profile Image" src={user?.photoURL} /> : <img alt="User Profile Image" src={defaultUserIcon} />
                            }


                           
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li>Dashboard</li>
                        <button className="btn" onClick={handleLogOut} > Logout </button>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
