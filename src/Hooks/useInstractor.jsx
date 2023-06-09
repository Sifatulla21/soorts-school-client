import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useInstractor = () => {
    const {user, loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const {data: isInstractor, isLoading: isInstractorLoading} = useQuery({
        queryKey: ['isInstractor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instractor/${user?.email}`);
            return res.data.instractor;
        }
    })
    return [isInstractor, isInstractorLoading]
}
export default useInstractor;