import { useState } from 'react'

import { AiOutlineBars } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import useRole from '../../hooks/useRole';
import UserSidebar from '../UserSidebar/UserSidebar';
import MemberSidebar from '../MemberSidebar/MemberSidebar';

const Sidebar = () => {
    
    const [isActive, setActive] = useState(false)

    const [role, isLoading] = useRole()

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/'>

                            {/* <img
                                // className='hidden md:block'
                                src='https://i.ibb.co/4ZXzmq5/logo.png'
                                alt='logo'
                                width='100'
                                height='100'
                            /> */}

                            <p className="btn hover:bg-green-200 btn-ghost text-xl font-bold"> <span className="text-green-500">Green</span> <span className="text-orange-500">LifeStyle</span> </p>


                        </Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full  md:flex px-4 py-2  rounded-lg justify-center items-center bg-green-100  mx-auto'>
                            <Link to='/'>

                                {/* <img
                  // className='hidden md:block'
                  src='https://i.ibb.co/4ZXzmq5/logo.png'
                  alt='logo'
                  width='100'
                  height='100'
                /> */}

                                <p className="btn hover:bg-green-200 btn-ghost text-xl font-bold"> <span className="text-green-500">Green</span> <span className="text-orange-500">LifeStyle</span> </p>

                                <hr className='mt-2' />

                            </Link>
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* Conditional toggle button here.. */}

                  
                        {

                            role === 'user' ? <UserSidebar></UserSidebar> : undefined

                        }

                        {
                            role === 'member' ? <MemberSidebar></MemberSidebar> : undefined
                        }



                    </div>
                </div>


            </div>
        </>
    )
}

export default Sidebar