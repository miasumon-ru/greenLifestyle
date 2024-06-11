import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";


const PaymentHistory = () => {

    const { user } = useAuth()

    const axiosPublic = useAxiosPublic()

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {

            const res = await axiosPublic.get(`/payments/${user?.email}`)

            // console.log(res.data)

            return res.data

        }
    })

    console.log(payments)



    return (
        <div>

            <div>
                <SectionTitle
                title={"Payment History"}
                >

                </SectionTitle>
            </div>


            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th> # </th>
                            <th>Name</th>
                            <th> Email </th>
                            <th>Floor No</th>
                            <th>Block Name</th>
                            <th>Apartment No</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            payments.map((item, index) => <tr key={item._id}>
                                <th> {index + 1} </th>
                                <td> {item.userName} </td>
                                <td> {item.email} </td>
                                <td> {item.floorNo} </td>
                                <td> {item.blockName} </td>
                                <td> {item.apartmentNo} </td>
                                <td> ${item.price} </td>
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PaymentHistory;