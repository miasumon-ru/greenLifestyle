
import { Link, useNavigate } from 'react-router-dom';
import loginVector from '../../assets/login_a12_vector.jpg'
import { useForm } from "react-hook-form"
import useAuth from '../../hooks/useAuth';

import { FcGoogle } from "react-icons/fc";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from 'react-helmet-async';
import { updateProfile } from 'firebase/auth';
import auth from '../../firebase/firebase.config';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
    const navigate = useNavigate()

    const {user} = useAuth()

    const axiosPublic = useAxiosPublic()

    const { login, googleLogin } = useAuth()



    const {
        register,
        handleSubmit,
    } = useForm()

    //   handleLogin

    const handleLogin = (data, e) => {

        const email = data.email
        const password = data.password

        console.log({ email, password })


        // verify password


        // login

        login(email, password)
            .then(result => {
                console.log(result.user)

                toast.success("login is successful")

                setTimeout(() => {

                    navigate('/')

                }, 2500)


            })
            .catch(error => {
                // console.log(error.message)
                if (error.message) {
                    toast.warn("Please provide correct email and password")
                }
            })

        // reset the form
        e.target.reset()





    }

    // handle Google Login

    const handleGoogleLogin = () => {

        googleLogin()
            .then( async result => {
                console.log(result.user)

                updateProfile(auth.currentUser, {
                    displayName: user?.name,
                    photoURL: user?.photoURL
                })
                    .then(() => {
                        console.log("updated profile")
                    })
                    .catch((error) => {
                        console.log(error.message)
                    })

                 console.log( 'auth curent user is ',  auth.currentUser)   

                //  saved user in the database

                 const userInfo = {
                    name: auth.currentUser?.displayName,
                    email: auth.currentUser?.email,
                    role: 'user'
                }

                console.log( 'info in the google login', userInfo)


             
                const responseUser = await axiosPublic.post(`/users`, userInfo)
                console.log(responseUser.data)

                toast.success("Login is successful")

                setTimeout(() => {

                    navigate('/')

                }, 2500)

            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div className="" >

            <div>
                <Helmet>

                    <title> Login  </title>

                </Helmet>
            </div>

            <div className="hero-content flex-col lg:flex-row md:mt-10">
                <div className="text-center lg:text-left w-full flex items-center justify-center">

                    <img className='md:max-w-2xl ' src={loginVector} alt="" />


                </div>
                <div className=" shrink-0 w-full max-w-sm shadow-md ml-4  bg-base-100">
                    <form onSubmit={handleSubmit(handleLogin)} className="card-body ">
                        <h1 className=" text-2xl md:text-5xl font-bold mb-10 text-center"> Login now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" {...register("email")} placeholder="Email" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password")} placeholder="Password" className="input input-bordered" required />


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='my-4'>
                            <p onClick={handleGoogleLogin} className='btn w-full font-medium'> <FcGoogle className='text-2xl' /> Login with Google </p>
                        </div>

                        <div className='text-center mt-4 space-y-2'>
                            <p className='text-gray-600 font-medium '>Do not have an Account ?</p>
                            <p className='text-gray-600 font-medium '> Please <span className='text-xl text-blue-500 text-bold ml-2 underline'> <Link to={'/register'}> Register </Link> </span> </p>
                        </div>
                    </form>

                    <ToastContainer

                        position='top-center'
                    ></ToastContainer>

                </div>
            </div>
        </div>
    );
};

export default Login;