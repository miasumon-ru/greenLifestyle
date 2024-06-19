import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

import defaultUserIcon from '../../../assets/user.png'

import navbarLogo from '../../../assets/whiteLogo.png'
import toast, { Toaster } from "react-hot-toast";



const Navbar = () => {

    const { user, logOut } = useAuth()

    console.log(user)

    // handle Logout

    const handleLogOut = () => {

        logOut()
            .then(() => {
                // console.log("logout is successful")

                toast.success('Logout is successful')
            })


    }


    const links = <>

        <li className="roboto"> <NavLink to='/' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A] ' : ''} > Home </NavLink> </li>

        <li className="roboto"> <NavLink to='/apartment' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Apartment </NavLink> </li>

        {/* <li className="roboto"> <NavLink to='/login' className={({ isActive }) => isActive ? ' text-[#23BE0A] border border-[#23BE0A]' : ''} > Login </NavLink> </li> */}

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
                    <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div className="flex flex-row justify-center items-center gap-2">
                    <Link to={'/'} > <img className="w-48 h-20 object-cover" src={navbarLogo} alt="Navbar logo" /> </Link>
                    {/* <p>
                        <a className="btn btn-ghost md:text-xl text-[16px] font-bold"> <span className="text-green-500">Green</span> <span className="text-orange-500">LifeStyle</span> </a>
                    </p> */}
                </div>
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
                                user ? <img alt="User Profile Image" src={user?.photoURL} /> : <img alt="User Profile Image" src={defaultUserIcon} />
                            }



                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[50] roboto space-y-1 p-2  menu menu-sm dropdown-content bg-base-100 rounded-md w-52">

                        {
                            user && <li className="flex items-center px-4 py-2  transition-colors duration-300 transform bg-green-200 rounded-md  hover:bg-green-300   hover:text-gray-700" >

                                {user?.displayName}

                            </li>
                        }

                        {
                            user &&



                            <Link className="" to={'/dashboard/myProfile'}>
                                <li className="flex items-center px-4 py-2  transition-colors duration-300 transform bg-green-200 rounded-md  hover:bg-green-300   hover:text-gray-700"> Dashboard </li>

                            </Link>
                        }


                        {
                            user ? <button className="flex items-center justify-center px-4 py-2   transition-colors duration-300 transform bg-green-200 rounded-md  hover:bg-green-300   hover:text-gray-700" onClick={handleLogOut} > Logout </button> :

                                <Link to={'/login'} > <li className="flex text-center items-center px-4 py-2   transition-colors duration-300 transform bg-green-200 rounded-md  hover:bg-green-300   hover:text-gray-700" > Login  </li> </Link>



                        }



                    </ul>
                </div>

                <Toaster></Toaster>

            </div>
        </div>
    );
};

export default Navbar;
