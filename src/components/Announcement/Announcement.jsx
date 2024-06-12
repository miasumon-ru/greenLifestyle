import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SectionTitle from "../SectionTilte/SectionTitle";


const Announcement = () => {

    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()

    const {data : announcements = [], isLoading} = useQuery({
        queryKey : ['announcements', user?.email],
        queryFn : async()=> {
            const res = await axiosPublic.get('/announcements')

            console.log(res.data)

            return res.data
        }
    })

    console.log(announcements)

    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }




    return (
        <div>

            <SectionTitle title={"Announcements"}></SectionTitle>

            <div>

                {
                    announcements.map((announcement, index) => <div key={announcement._id}  className="border p-5 max-w-2xl mx-auto" >

                        <h1 className="text-2xl md:text-4xl roboto"> {index + 1}. Title :  {announcement.title} </h1>

                        <p className="roboto mt-6" > {announcement.description} </p>


                    </div>)
                }

            </div>
            
        </div>
    );
};

export default Announcement;