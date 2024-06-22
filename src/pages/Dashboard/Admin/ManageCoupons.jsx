import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";



const ManageCoupons = () => {

    const {
        register,
        handleSubmit,
    } = useForm()

    const axiosPublic = useAxiosPublic()


    const { data: coupons = [], isLoading, refetch  } = useQuery({
        queryKey: ['coupons'],
        queryFn: async () => {
            const res = await axiosPublic.get('/coupons')
            return res.data
        }
    })

    // console.log(coupons)


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }




    const handleCouponSubmit = async (data, e) => {

        const couponCode = data.couponCode

        const discountPercentage = parseInt(data.discountPercentage)

        const couponDescription = data.couponDescription

        // console.log(couponCode, discountPercentage, couponDescription)

        const couponInfo = {

            couponCode,
            discountPercentage,
            couponDescription

        }

        // console.log(couponInfo)

        // add coupon into the database

        const res = await axiosPublic.post('/coupons', couponInfo)

        // console.log(res.data)

        if (res.data.insertedId) {
            toast.success('Coupon is added successfully')
            e.target.reset()

            refetch()
        }


    }


    return (
        <div className="">

            <SectionTitle title={'Manage Coupons'}></SectionTitle>

            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <div className="max-w-32 mx-auto mb-10">
                <button className="btn bg-green-400 hover:bg-green-500 " onClick={() => document.getElementById('my_modal_1').showModal()}>Add Cuopon </button>
            </div>


            <dialog id="my_modal_1" className="modal">
                <div className="modal-box w-full">

                    <h1 className="text-4xl text-center"> Coupon Info </h1>


                    <div className="modal-action ">

                        <Toaster></Toaster>

                        <form className="w-full roboto" onSubmit={handleSubmit(handleCouponSubmit)} method="dialog">

                            {/* if there is a button in form, it will close the modal */}

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Coupon Code</span>
                                </label>
                                <input type="text" {...register("couponCode")} placeholder="Coupon Code" className="input input-bordered" required />
                            </div>

                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Discount Percentage</span>
                                </label>
                                <input type="text" {...register("discountPercentage")} placeholder="Discount Percentage" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text">Coupon Description</span>
                                </label>
                                <textarea  {...register("couponDescription")} placeholder="Coupon Description" className="border p-5 rounded-lg" required />
                            </div>

                            <button className="btn w-full">Submit</button>
                        </form>

                    </div>

                    <div className=" justify-center">



                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn w-full mt-4">Cancel</button>
                        </form>
                    </div>


                </div>
            </dialog>


            {/* coupon showing on the table */}

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th> Coupon Code </th>
                                <th>Discount</th>
                                <th> Coupon Description </th>
                              
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}

                            {
                                coupons.map((coupon, index) => <tr key={index} className="">
                                    <th> {index + 1} </th>
                                    <td> {coupon.couponCode} </td>
                                    <td> {coupon.discountPercentage} % </td>
                                    <td> {coupon.couponDescription} </td>
                                 
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>



        </div>
    );
};

export default ManageCoupons;