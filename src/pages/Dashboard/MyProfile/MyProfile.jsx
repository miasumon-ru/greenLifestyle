
import { Helmet } from 'react-helmet-async'
import useRole from '../../../hooks/useRole';
import UserDashboard from '../UserDashboard';



const MyProfile = () => {


    const [role, isLoading] = useRole()


    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            {role === 'pending' ? <UserDashboard></UserDashboard> : undefined }

        </div>
    );
};

export default MyProfile;