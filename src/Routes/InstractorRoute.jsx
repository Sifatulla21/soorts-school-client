import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useInstractor from '../Hooks/useInstractor';

const InstractorRoute = ({children}) => {
    const {user,loading}= useAuth();
    const [isInstractor, isInstractorLoading] = useInstractor();
    const location = useLocation();
    if(loading || isInstractorLoading){
        return <progress className="progress w-56"></progress>;
    } 
    if(user && isInstractor){
        return children;
    }
    return <Navigate state={{from: location}} to="/"></Navigate>;
};

export default InstractorRoute;