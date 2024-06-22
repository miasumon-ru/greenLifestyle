import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const MakePayment = () => {

    const { user } = useAuth()
    // const axiosPublic = useAxiosPublic()

    const axiosSecure = useAxiosSecure()

    const { data: agreements, isLoading } = useQuery({
        queryKey: ['agreementsAceept', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/acceptedAgreements/${user?.email}`)
            return res.data
        }
    })

    // console.log(agreements)


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>

    }



    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const d = new Date()

    const month = months[d.getMonth()]


    return (
        <div>

            <div className=" shrink-0 w-full  shadow-md ml-4  bg-base-100">
                <form className="card-body w-full">
                    <h1 className=" text-2xl md:text-5xl font-bold mb-10 text-center"> Apartment Info </h1>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        {/* Email and Floor No */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="Email" defaultValue={agreements.userEmail} disabled placeholder="Email" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Floor</span>
                            </label>
                            <input type="text" defaultValue={agreements.floorNo} disabled placeholder="Floor No" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        {/* Block Name and Apartment No */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text"> Block Name </span>
                            </label>
                            <input type="text" defaultValue={agreements.blockName} disabled placeholder="Block Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Apartment No</span>
                            </label>
                            <input type="text" defaultValue={agreements.apartmentNo} disabled placeholder="Apartment No" className="input input-bordered" required />
                        </div>

                    </div>

                    <div className="flex flex-col md:flex-row gap-4 w-full">

                        {/* Rent and Month */}

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Rent</span>
                            </label>
                            <input type="text" defaultValue={`$ ${agreements.rent}`} disabled placeholder="Rent" className="input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Month</span>
                            </label>
                            <input type="text" defaultValue={month} disabled placeholder="Month" className="input input-bordered" required />
                        </div>

                    </div>


                    <div className="form-control mt-6">
                        <Link to={'/dashboard/payment'}>
                            <button className="btn text-white roboto bg-green-400 hover:bg-green-500">Pay</button>
                        </Link>
                    </div>


                </form>



            </div>

        </div>
    );
};

export default MakePayment;