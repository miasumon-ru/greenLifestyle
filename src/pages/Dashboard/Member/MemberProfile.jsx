import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";



const MemberProfile = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: agreementsAll, isLoading } = useQuery({
        queryKey: ['agreementsAll', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/agreementsAll/${user?.email}`)
            return res.data
        }
    })

    console.log(agreementsAll)


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    const date = new Date().toLocaleDateString()


    return (
        <div>

            <div className="text-center">

                <img className="w-24 h-24 mx-auto rounded-full" src={user?.photoURL} alt="" />

                <div className="mt-6">
                    <p className="roboto text-xl font-semibold" > Name : {user?.displayName} </p>

                    <p className="roboto text-xl font-semibold"> Email : {user?.email} </p>
                </div>
            </div>

            <div className="border border-dashed mt-10"></div>

            <div className="text-center mt-10  ">
                <h1 className="text-4xl mb-10"> Apartment Info </h1>

                <div className="overflow-x-auto">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th> Number</th>
                                    <th> Agreement Accept Date </th>
                                    <th> Floor No </th>
                                    <th> Block Name </th>
                                    <th> Apartment No </th>
                                </tr>
                            </thead>
                            <tbody className="">
                                {/* row 1 */}

                        
                                    <tr >
                                        <th> 1 </th>
                                        <td> [{date}] </td>
                                        <td> {agreementsAll?.floorNo} </td>
                                        <td> {agreementsAll?.blockName} </td>
                                        <td> {agreementsAll?.apartmentNo} </td>
                                   
                                    </tr>
                        


                            </tbody>
                        </table>
                    </div>
                </div>

            </div>



        </div>
    );
};

export default MemberProfile;