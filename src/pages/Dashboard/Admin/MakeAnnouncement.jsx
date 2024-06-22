
import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import toast, { Toaster } from "react-hot-toast";


const MakeAnnouncement = () => {


    const axiosPublic = useAxiosPublic()

    const {
        register,
        handleSubmit,
    
    } = useForm()


    const hanldeAnnouncement = async(data, e) => {

        const title = data.title

        const description = data.description

        // console.log('tile:', title, 'description: ', description)

        const announcement = {
            title : title,
            description : description
        }


        const res = await axiosPublic.post('/announcements', announcement)

        // console.log(res.data)

        if(res.data.insertedId){
            toast.success("The announcement has been successful")

            e.target.reset()



        
        
        }






    }
    return (
        <div>

            <SectionTitle title={"Announcement"}></SectionTitle>


            <div>

                <div className=" shrink-0     bg-base-100">
                    <form onSubmit={handleSubmit(hanldeAnnouncement)} className="card-body shadow-md max-w-2xl mx-auto  ">
                    
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Title</span>
                            </label>
                            <input type="text" {...register("title")} placeholder="Title of the Announcement" className="input input-bordered" required />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea type="text" {...register("description")} placeholder="Description of the Announcement" className="border p-5 rounded-lg" required />


                        </div>

                        <div className="form-control mt-6">
                            <button className="btn roboto bg-green-400 hover:bg-green-500">Announce</button>
                        </div>

            
                      
                    </form>

                  

                </div>



            </div>

            <Toaster></Toaster>

        </div>
    );
};

export default MakeAnnouncement;