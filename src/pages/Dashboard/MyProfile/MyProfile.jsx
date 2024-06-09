
import { Helmet } from 'react-helmet-async'
import useRole from '../../../hooks/useRole';
import UserDashboard from '../UserDashboard';
import MemberProfile from '../Member/MemberProfile';



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

        </div>
    );
};

export default MyProfile;