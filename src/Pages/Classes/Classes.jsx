import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaArrowAltCircleRight } from "react-icons/fa";
import useInstructor from '../../Hooks/useInstractor';
import useAdmin from '../../Hooks/useAdmin';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';

const Classes = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const { user } = useAuth();
    console.log(user);
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    });
    const handleSelect = (cls) => {
        if (user === null) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Login first',
                showConfirmButton: true,

            })

        }
        const selectedClass = { name: cls.name, iName: cls.iName, email: user.email, price: parseFloat(cls.price), image: cls.image }
        axiosSecure.post('/selectedclasses', selectedClass)
            .then(data => {
                if (data.data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${cls.name} selected successfully`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }



    return (
        <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                {
                    classes.map(cls => <div key={cls._id} className={` rounded-2xl shadow-xl p-8 mx-auto max-w-2xl ${cls.seat == 0 ? 'bg-red-500' : 'bg-white'}`}>
                        <div className="mb-4 md:mb-0">
                            <img
                                src={cls.image}
                                alt="Profile"
                                className="w-48 h-48 object-cover rounded-lg"
                            />
                        </div>
                        <div className="font-bold">
                            <h2 className="text-xl font-bold mb-2">{cls.name}</h2>
                            <p className="mb-4">Instractor Name: {cls.iName}</p>
                            <p className="mb-4">Price: {cls.price}</p>
                            <p className="mb-4">Total Enrolled: {cls.enrolled}</p>
                            <p className="mb-4">Available Seat: {cls.seat}</p>
                            <button disabled={isAdmin || isInstructor || cls.seat == 0} onClick={() => handleSelect(cls)} className="btn btn-primary btn-outline w-full font-bold">Select <FaArrowAltCircleRight className="text-xl"></FaArrowAltCircleRight></button>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );

}
export default Classes;

