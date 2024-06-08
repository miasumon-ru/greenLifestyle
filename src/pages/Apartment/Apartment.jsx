import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ApartmentCard from "./ApartmentCard";



const Apartment = () => {


    const { data: apartments = [] } = useQuery({
        queryKey: ['apartments'],
        queryFn: async () => {
            const res = await axios.get('apartments.json')

            return res.data
        }
    })

    console.log(apartments)




    return (
        <div>

            {/* apartment card */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    apartments.map((apartment, index) => <ApartmentCard apartment={apartment} key={index}></ApartmentCard>)
                }
            </div>

        </div>
    );
};

export default Apartment;