import axios from "axios";
import { useNavigate } from "react-router-dom";

import { useEffect } from "react";
import useAuth from "./useAuth";




const axiosSecure = axios.create({

    baseURL:"http://localhost:5000"

})

const useAxiosSecure = () => {

    const {logOut} = useAuth()

    const navigate = useNavigate()

    axiosSecure.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem("access-token")

        config.headers.authorization = `Bearer ${token}`

        // console.log('request stopped in interceptors', token)

        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });


    //   response

    useEffect(()=> {

        axiosSecure.interceptors.response.use(function (response) {
            // Any status code that lie within the range of 2xx cause this function to trigger
            // Do something with response data
            return response;
          }, async(error) => {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
    
            // console.log('status error in the interceptors', error.response.status)
    
            if(error.response.status === 401 || error.response.status === 403){
    
                await logOut()
    
           
                    navigate('/login')
                    
                      
            }
    
        
            return Promise.reject(error);
          });

    }, [logOut, navigate])
    





    return axiosSecure
};

export default useAxiosSecure;