import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {


    const [clientSecret, setClientSecret] = useState('')

    const [transactionId, setTransactionId] = useState('')
    const [error, setError] = useState('')

    const stripe = useStripe();
    const elements = useElements();
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const navigate = useNavigate()



    const { data: agreementsPayment = {}, isLoading } = useQuery({
        queryKey: ['agreementsPayment', user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/agreementsAll/${user?.email}`)
            return res.data
        }
    })

    console.log(agreementsPayment)

    const totalPrice = parseInt(agreementsPayment.rent)
    console.log(totalPrice)


    useEffect(() => {

        if (totalPrice > 0) {
            axiosPublic.post('/create-payment-intent', { price: totalPrice })
                .then(res => {


                    setClientSecret(res.data.clientSecret)
                })
        }


    }, [axiosPublic, totalPrice])

    console.log(clientSecret)



   


    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }

  





    const handleSubmit = async (event) => {

        event.preventDefault()



        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return
        }




        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('Error', error)

            setError(error.message)
        } else {
            console.log('Payment Method', paymentMethod)

            setError('')
        }

        // confirm payment

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {

            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName | 'anonymous'
                }
            }

        })

        if (confirmError) {
            console.log("confirm error")
        }
        else {
            console.log("payment intent", paymentIntent)

            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id)

                setTransactionId(paymentIntent.id)

                // save the payment in the database
                const payment = {
                    email: user?.email,
                    price: totalPrice,
                    date: new Date(),
                    userName : agreementsPayment.userName,
                    floorNo : agreementsPayment.floorNo,
                    blockName : agreementsPayment.blockName,
                    apartmentNo : agreementsPayment.apartmentNo
                    // cartId: cart.map(item => item._id),
                    // menuId: cart.map(item => item.menuId),
                    // status: 'pending'


                }


                // save the payment info to the database

                const res = await axiosPublic.post('/payments', payment)

                console.log("payment saved", res.data)

                if (res.data.insertedId) {

                    // refetch the cart item

                    // refetch()

                    // Swa.fire({

                    //     icon: "success",
                    //     title: "Payment has been successful",
                    //     showConfirmButton: false,
                    //     timer: 1500
                    // });

                    toast.success('Payment has been successful')

                    // navigate to the payment history

                    setTimeout(() => {
                        navigate('/dashboard/paymentHistory')
                    }, 2500)


                }




            }
        }







    }


    return (
        <div>

            <div className="text-center">
                <h1 className="text-5xl my-10"> Total Payable Amount : ${totalPrice} </h1>
            </div>

            <form className="max-w-2xl shadow-lg p-5 mx-auto" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="border px-4 mt-4 bg-orange-600 text-white" type="submit" disabled={!stripe}>
                    Pay
                </button>

                <p className="text-red-400 "> {error} </p>


                {transactionId && <p className="text-green-600"> Your transaction id is : {transactionId} </p>}




            </form>



            <Toaster></Toaster>

        </div>
    );
};

export default CheckoutForm;