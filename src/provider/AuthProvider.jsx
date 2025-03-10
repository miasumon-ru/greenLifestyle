


import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";


import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


const googleProvider = new GoogleAuthProvider();


export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const axiosPublic = useAxiosPublic()



    // create user

    const createUser = async (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password)

    }

    //  login by email and password

    const login = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    // login by Google

    const googleLogin = () => {

        return signInWithPopup(auth, googleProvider)


    }


    // logout

    const logOut = () => {

        return signOut(auth)

    }

    // onAuthStateChange , an observer

    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {

            setUser(currentUser)


            setLoading(false)

            // console.log(currentUser)

            // const loggedUser = {
            //     email : currentUser?.email || user?.email
            // }

            // users information saved in the database

        
            if (currentUser) {

                const userInfo = {
                    email: currentUser.email    
                }

                axiosPublic.post('jwt', userInfo)
                .then((res)=>{

                    // console.log(res.data.token)

                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }

                })

         
            }
            else{
                // remove the token if the token is stored in the client side
                localStorage.removeItem('access-token')
            }

        })

        return () => {
            return unSubscribe()
        }

    }, [axiosPublic])

    const authInfo = {

        user,
        setUser,
        loading,
        setLoading,
        createUser,
        login,
        logOut,
        googleLogin

    }
    return (
        <AuthContext.Provider value={authInfo}>

            {
                children
            }

        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}



export default AuthProvider;