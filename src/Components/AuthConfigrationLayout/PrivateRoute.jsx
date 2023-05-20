import React, { useContext } from 'react';
import { AuthContext } from './AuthConfigration';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import LoadingData from '../ShareableComponents/LoadingData';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <LoadingData/>
    };

    if(user){
        return children;
    };


    return <Navigate to='/login' state={{from:location}} replace/>
};

export default PrivateRoute;