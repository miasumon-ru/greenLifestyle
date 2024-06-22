import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../components/SectionTilte/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

import { IoBedOutline } from "react-icons/io5";
import { MdOutlineEventAvailable } from "react-icons/md"
import { CgUnavailable } from "react-icons/cg";
import { FaUser } from "react-icons/fa6";
import { MdCardMembership } from "react-icons/md";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminProfile = () => {

    const { user } = useAuth()

    const axiosPublic = useAxiosPublic()
    const axiosSecure =  useAxiosSecure()

    // all apartments/rooms data


    const { data: apartmentsAll = {}, isLoading } = useQuery({
        queryKey: ['apartmentsAll', ],
        queryFn: async () => {
            const res = await axiosPublic.get(`/apartmentsAll`)
            return res.data
        }
    })

    const numberOfApartments = apartmentsAll.length
  
  
    // all accepted agreements data

    const { data: acceptedAgreementsAll = {} } = useQuery({
        queryKey: ['acceptedAgreementsAll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/acceptedAgreementsAll`)
            return res.data
        }
    })

    const percentageOfAvailableRooms = (numberOfApartments - acceptedAgreementsAll.length) * 100 / 24 
    const percentageOfUnavailableRooms = acceptedAgreementsAll.length * 100 / 24


    // all users data
    const { data: usersAll = [] } = useQuery({
        queryKey: ['usersAll'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users`)
            return res.data
        }
    })

    // console.log( 'users all', usersAll)

    const numberOfUsers = usersAll.filter(userOne => userOne.role === 'user').length
    const numberOfMembers = usersAll.filter(userOne => userOne.role === 'member').length
    // console.log("number of user is : ", numberOfUsers)
    // console.log("number of member is : ", numberOfMembers)

   
    if (isLoading) {
        return <span className="loading loading-bars loading-lg"></span>
    }


    return (
        <div>

            <SectionTitle title={"Admin Profile"}></SectionTitle>


            <div className="text-center">

                <img className="w-24 h-24 mx-auto rounded-full" src={user?.photoURL} alt="" />

                <div className="mt-6">
                    <p className="roboto text-xl font-semibold" > Name : {user?.displayName} </p>

                    <p className="roboto text-xl font-semibold"> Email : {user?.email} </p>
                </div>
            </div>

            <div className="border border-dashed my-10"></div>

            {/* statistics  */}



            <div className="max-w-5xl mx-auto text-center roboto p-2">

                {/* <h1 className="text-4xl"> Statistics </h1>
                <div className="border border-dashed my-10"></div> */}


                <div className="stats stats-vertical lg:stats-horizontal shadow">

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <IoBedOutline className="text-3xl" />
                        </div>
                        <div className="stat-title">Rooms</div>
                        <div className="stat-value"> {numberOfApartments} </div>
                       
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <MdOutlineEventAvailable className="text-3xl" />
                        </div>
                        <div className="stat-title">  Available rooms </div>
                        <div className="stat-value"> {percentageOfAvailableRooms.toFixed(2)} % </div>
                        
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <CgUnavailable className="text-3xl" />
                        </div>
                        <div className="stat-title"> Unavailable Rooms </div>
                        <div className="stat-value"> {percentageOfUnavailableRooms.toFixed(2)}% </div>
                  
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        < FaUser className="text-3xl" />
                        </div>
                        <div className="stat-title"> Users </div>
                        <div className="stat-value"> {numberOfUsers} </div>
                  
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                        <MdCardMembership className="text-3xl" />
                        </div>
                        <div className="stat-title"> Members </div>
                        <div className="stat-value"> {numberOfMembers} </div>
                  
                    </div>

                </div>

            </div>

        </div>
    );
};

export default AdminProfile;