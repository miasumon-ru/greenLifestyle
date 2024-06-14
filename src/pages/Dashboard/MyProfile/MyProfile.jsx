
import { Helmet } from 'react-helmet-async'
import useRole from '../../../hooks/useRole';
import UserDashboard from '../UserDashboard';
import MemberProfile from '../Member/MemberProfile';
import AdminProfile from '../Admin/AdminProfile';



const MyProfile = () => {


    const [role, isLoading] = useRole()


    if(isLoading){
        return <span className="loading loading-bars loading-lg"></span>
    }


    return (
        <div className='  h-screen'>
            <Helmet>
                <title>Profile</title>
            </Helmet>

            {role === 'user' && <UserDashboard></UserDashboard> }
            {role === 'member' && <MemberProfile></MemberProfile> }
            {role === 'admin' && <AdminProfile></AdminProfile> }

        </div>
    );
};

export default MyProfile;