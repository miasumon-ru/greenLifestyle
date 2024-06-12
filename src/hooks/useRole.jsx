import { useQuery } from "@tanstack/react-query";

import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";



const useRole = () => {
    const { user } = useAuth()

    console.log(user)

    const axiosPublic = useAxiosPublic()

    //  checking role

    const { data: role = {}, isLoading, refetch } = useQuery({
        queryKey: ['role', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)

            console.log(res.data.role, isLoading)

            return res.data.role
        }
    })

    console.log(role)
    return [role, isLoading, refetch]
};

export default useRole;