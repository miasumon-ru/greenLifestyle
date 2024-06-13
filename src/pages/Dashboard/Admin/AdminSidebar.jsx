import { FaEdit, FaRegCheckSquare, FaUser } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink } from "react-router-dom";



const AdminSidebar = () => {
    return (
        <nav className='roboto font-medium'>
            {/* My Profile */}
            <NavLink
                to='/dashboard/myProfile'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300   hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                < FaUser className='w-5 h-5' />

                <span className='mx-4 font-medium'>Admin Profile</span>

            </NavLink>

            <NavLink
                to='manageMembers'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300  hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaEdit className='w-5 h-5' />

                <span className='mx-4 font-medium'> Manage Members </span>
            </NavLink>

            <NavLink
                to='makeAnnouncement'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300  hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'> Make Announcement </span>
            </NavLink>
            <NavLink
                to='agreements'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300  hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaRegCheckSquare className='w-5 h-5' />

                <span className='mx-4 font-medium'> Agreement Request </span>
            </NavLink>
            <NavLink
                to='manageCoupons'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300  hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <FaEdit className='w-5 h-5' />

                <span className='mx-4 font-medium'> Manage Coupons </span>
            </NavLink>

        </nav>
    );
};

export default AdminSidebar;