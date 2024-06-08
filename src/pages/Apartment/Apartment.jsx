import { useQuery } from "@tanstack/react-query";
import ApartmentCard from "./ApartmentCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";



const Apartment = () => {

    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    // fetching all apartments data 

    const { data: apartments = [] } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/apartments')

            return res.data
        }
    })

    console.log(apartments)

    // handle Agreement Button

    const handleAgreement = async(id) => {

        console.log('agreement for id', id)

        // get the specific apartment by id

        const apartment = await axiosPublic.get(`/apartments/${id}`)

        console.log(apartment.data)

        const agreementInfo = {
            userName : user?.displayName,
            userEmail : user?.email,
            floorNo : apartment.data.floor_no,
            blockName : apartment.data.block_name,
            apartmentNo : apartment.data.apartment_no,
            rent : apartment.data.rent,
            status : 'pending'
        }

        console.log(agreementInfo)

        // insert the agreement info to the agreementsCollection of the database

        const agreement = await axiosPublic.post('/agreements', agreementInfo)

        if(agreement.data.message){
            return toast.error('Yor already requested for this apartment')
        }
  
        if(agreement.data.insertedId){
            toast.success('Your agreement request for this  apartment completed')
        }
        
        

    }




    return (
        <div>

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

            <Toaster></Toaster>

        </div>
    );
};

export default Apartment;