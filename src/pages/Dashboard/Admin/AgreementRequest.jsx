import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import Swal from "sweetalert2";


const AgreementRequest = () => {

    // const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    const { data: agreements, isLoading, refetch } = useQuery({
        queryKey: ['agreements'],
        queryFn: async () => {
            const res = await axiosPublic.get('/agreements')
            return res.data
        }
    })

    console.log(agreements)


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

    // handle Accept

    const handleAccept = async (email) => {

        console.log(email)

        Swal.fire({
            title: "Are you sure?",
            text: "The user will convert into Member !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, convert it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                // change the status into checked

                const res = await axiosPublic.patch(`agreements/${email}`, { status: "checked" })

                console.log(res.data)

                if (res.data.modifiedCount > 0) {

                    // change the role user into member

                    const result = await axiosPublic.patch(`/users/${email}`, { status: 'member' })

                    if (result.data.modifiedCount > 0) {

                        console.log(result.data)

                        Swal.fire({
                            title: "Converted into member",
                            text: "The user has been member successfully.",
                            icon: "success"
                        });
    
                        refetch()

                    }


                }



            }
        });


    }


    // handle Reject

    const handleReject = (id) => {

        console.log(id)


    }



    return (
        <div>

            <SectionTitle title={'Agreement Requests'}></SectionTitle>

            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Floor No</th>
                            <th>Block Name</th>
                            <th>Apartment No</th>
                            <th>Request Date</th>
                            <th>Accept</th>
                            <th>Reject</th>
                            <th >Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            agreements.map((agreement, index) => <tr key={agreement._id}>
                                <th> {index + 1} </th>
                                <td> {agreement.userName} </td>
                                <td> {agreement.userEmail} </td>
                                <td> {agreement.floorNo} </td>
                                <td> {agreement.blockName} </td>
                                <td> {agreement.apartmentNo} </td>
                                <td> {agreement.requestDate} </td>
                                <td> <button onClick={() => handleAccept(agreement.userEmail)} className="btn btn-xs text-green-400"> Accept </button> </td>
                                <td> <button onClick={() => handleReject(agreement._id)} className="btn btn-xs text-red-400"> Reject </button> </td>
                                <td className="text-yellow-400"> {agreement.status} </td>

                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AgreementRequest;
