import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";

import './Apartment.css'



const Apartment = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()

    // pagination

    // const [itemsPerPage, setItemsPerPage] = useState(6)
    const itemsPerPage = 6
    const [currentPage, setCurrentPage] = useState(0)

  

    // apartments count

    const { data: counts = [] } = useQuery({
        queryKey: ['apartmentsCount'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartmentsCount')

            return (res.data.count)
        }
    })

    const count = counts

    const numberOfPages = Math.ceil(count / itemsPerPage)
   

    const pages = [...Array(numberOfPages).keys()]

    // handle previous page

    const handlePrevPage = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    // handle Next page

    const handleNextPage = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    // fetching apartments data 

    const { data: apartments = [] } = useQuery({
        queryKey: ['apartments', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartments?page=${currentPage}&&size=${itemsPerPage}`)

            return res.data
        }
    })

    

    // handle Agreement Button

    const handleAgreement = async (id) => {

        console.log('agreement for id', id)

        // get the specific apartment by id

        const apartment = await axiosPublic.get(`/apartments/${id}`)

        console.log(apartment.data)

        const date = new Date().toDateString()

        const agreementInfo = {
            userName: user?.displayName,
            userEmail: user?.email,
            floorNo: apartment.data.floor_no,
            blockName: apartment.data.block_name,
            apartmentNo: apartment.data.apartment_no,
            rent: apartment.data.rent,
            status: 'pending',
            requestDate : date
        }


        // insert the agreement info to the agreementsCollection of the database

        const agreement = await axiosPublic.post(`/agreements/${user?.email}`, agreementInfo)

        if (agreement.data.message === true) {
            return toast.error('Sorry! A user is able to apply for one apartment only')
        }

        if (agreement.data.insertedId) {
            toast.success('Your agreement request for this  apartment completed')
        }


    }



    return (
        <div className="">

            {/* apartment card */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    apartments.map((apartment, index) => <ApartmentCard
                        apartment={apartment}
                        handleAgreement={handleAgreement}
                        key={index}
                    ></ApartmentCard>)
                }
            </div>

            {/* pagination */}

            <div className=" pagination">


                <button onClick={handlePrevPage} > Prev </button>

                {
                    pages.map(page => <button className={currentPage === page ? "selected" : undefined} onClick={() => setCurrentPage(page)} key={page}> {page + 1} </button>)

                    // pages.map(page => <button key={page} onClick={()=> setCurrentPage(page)}> {page} </button>)
                }



                <button onClick={handleNextPage}> Next </button>


            </div>



            <Toaster></Toaster>

        </div>
    );
};

export default Apartment;