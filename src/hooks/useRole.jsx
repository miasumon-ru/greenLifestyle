import { useQuery } from "@tanstack/react-query";

// import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useRole = () => {
    const { user } = useAuth()

    console.log(user)

    // const axiosPublic = useAxiosPublic()
    const axiosSecure =  useAxiosSecure()

    //  checking role

    const { data: role = {}, isLoading, refetch } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)

            console.log(res.data.role, isLoading)

            return res.data.role
        }
    })

    console.log(role)
    return [role, isLoading, refetch]
};

export default useRole;