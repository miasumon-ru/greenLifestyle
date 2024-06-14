import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

import PropTypes from 'prop-types';
import useRole from "../hooks/useRole";

const MemberRoutes = ({children}) => {

    const {user, loading} = useAuth()
    const [role, isLoading, ,] =  useRole()

    if(loading || isLoading ){
        return <div className="flex items-center justify-center min-h-screen"> <span className="loading loading-bars loading-lg"></span> </div>
    }

    if(user && role === 'member'){
        return children
    }

    return <Navigate to={'/login'}></Navigate>
};

MemberRoutes.propTypes = {
    children : PropTypes.node
}

export default MemberRoutes;