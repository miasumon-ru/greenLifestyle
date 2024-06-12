import { FaUser } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
import { NavLink } from "react-router-dom";



const UserSidebar = () => {

    
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

                <span className='mx-4 font-medium'>My Profile</span>

            </NavLink>

            <NavLink
                to='/dashboard/announcements'
                className={({ isActive }) =>
                    `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-green-300  hover:text-gray-700 ${isActive ? 'bg-green-300  text-gray-700' : 'text-gray-600'
                    }`
                }
            >
                <TfiAnnouncement className='w-5 h-5' />

                <span className='mx-4 font-medium'> Announcement </span>
            </NavLink>

        </nav>
    );
};

export default UserSidebar;