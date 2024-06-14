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

    const handleAccept = async (agreement) => {

        console.log(agreement)

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

                const res = await axiosPublic.patch(`agreements/${agreement.userEmail}`, { status: "checked" })
                const result = await axiosPublic.patch(`/users/${agreement.userEmail}`, { status: 'member' })
                console.log(result.data)

                console.log(res.data)

                if (res.data.modifiedCount > 0) {

                   
                    // find the accepted agreement

                    const {data} = await axiosPublic.get(`/agreementsAll/${agreement.userEmail}`)  
                    console.log(data)

                    const {userName, userEmail, floorNo, blockName, apartmentNo, rent, status, requestDate} = data

                    const acceptedDate = new Date().toDateString()

                    const acceptedAgreementInfo = {

                        userName,
                        userEmail,
                        floorNo,
                        blockName,
                        apartmentNo, 
                        rent,
                        status,
                        requestDate,
                        acceptedDate : acceptedDate

                        
                    }

                    // saved the accepted agreement info into the new collection of the database
         

                    const acceptedAgreement = await axiosPublic.post('/acceptedAgreements', acceptedAgreementInfo)

                    console.log(acceptedAgreement.data)


                    // delete the requested apartment from the page after modified and accepted

                    const agreementDeleted = await axiosPublic.delete(`/agreements/${agreement.userEmail}`)
                    console.log(agreementDeleted.data)

                    // change the role user into member
   
                        Swal.fire({
                            title: "Converted into member",
                            text: "The user has been member successfully.",
                            icon: "success"
                        });

                        refetch()
    
                

                }

            }
        });



    }


    
    // handle Reject

    const handleReject = async (agreement) => {

        console.log(agreement)

        Swal.fire({
            title: "Are you sure?",
            text: "The user will be rejected !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, convert it!"
        }).then(async (result) => {
            if (result.isConfirmed) {

                // change the status into checked

                const res = await axiosPublic.patch(`agreements/${agreement.userEmail}`, { status: "checked" })
                // const result = await axiosPublic.patch(`/users/${email}`, { status: 'member' })
                // console.log(result.data)

                console.log(res.data)

                if (res.data.modifiedCount > 0) {

                      // delete the requested apartment from the page after modified and rejected

                      const agreementDeleted = await axiosPublic.delete(`/agreements/${agreement.userEmail}`)
                      console.log(agreementDeleted.data)
   
                        Swal.fire({
                            title: "Member has been rejected rejected!!",
                            text: "The user has been rejected successfully.",
                            icon: "success"
                        });
    
                        refetch()

                  


                }

            }
        });



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
                            <th>Rent</th>
                            <th>Request Date</th>
                            <th>Accept</th>
                            <th>Reject</th>
                         
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
                                <td> `${agreement.rent}` </td>
                                <td> {agreement.requestDate} </td>
                                <td> <button onClick={() => handleAccept(agreement)} className="btn btn-xs text-green-400"> Accept </button> </td>
                                <td> <button onClick={() => handleReject(agreement)} className="btn btn-xs text-red-400"> Reject </button> </td>
                       

                            </tr>)
                        }




                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AgreementRequest;
