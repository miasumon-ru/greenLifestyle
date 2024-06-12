import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";

import Swal from "sweetalert2";


const ManageMembers = () => {

    // fetch the all members

    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const [, , refetch] = useRole()

    const { data: members = [], isLoading, refetch: againFetch } = useQuery({
        queryKey: ['members', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/agreements/${user?.email}`)

            console.log(res, isLoading)



            if (res.data.members) {


                refetch()

            }

            return res.data.members
        }
    })

    console.log(members)

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // handle remove the member and patch the member into user

    const handleMember = async (id) => {

        console.log(id)

        Swal.fire({
            title: "Are you sure?",
            text: "The member will convert into User !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, convert it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                const res = await axiosPublic.patch(`/agreements/${id}`, { status: 'user' })

                if (res.data.modifiedCount > 0) {
                    
                    Swal.fire({
                        title: "Converted into User",
                        text: "The member has been user successfully.",
                        icon: "success"
                    });

                    againFetch()

                }

            


            }
        });



    }





    return (
        <div>

            <SectionTitle title={'Manage Members'}></SectionTitle>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> User Name</th>
                                <th>User Email</th>
                                <th> Action </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                members.map((member, index) => <tr key={index} className="">
                                    <th> {index + 1} </th>
                                    <td> {member.userName} </td>
                                    <td> {member.userEmail} </td>
                                    <td> <button onClick={() => handleMember(member._id)} className="btn btn-xs text-red-600"> remove </button> </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ManageMembers;