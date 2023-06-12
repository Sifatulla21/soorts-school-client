import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user,loading}= useAuth();
    const location = useLocation();
    
    if(user){
        return children;
    };
    if(loading){
        return <progress className="progress w-56"></progress>;
    };
    return <Navigate state={{from: location}} to="/login"></Navigate>;
};

export default PrivateRoute;