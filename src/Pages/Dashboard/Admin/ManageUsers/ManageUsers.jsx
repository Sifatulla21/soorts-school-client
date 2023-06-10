import { useQuery } from '@tanstack/react-query';
import { FaUserGraduate, FaUserShield, FaUserTimes } from "react-icons/fa";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManageUsers = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })
    // const handleDelete = user => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: 'You will not be able to revert this!',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {

    //             fetch(`http://localhost:5000/users/delete/${user._id}`, {
    //                 method: 'DELETE'
    //             })
    //                 .then(res => res.json())
    //                 .then(data => {
    //                     console.log(data);
    //                     if (data.deletedCount > 0) {
    //                         refetch();
    //                         Swal.fire(
    //                             'Deleted!',
    //                             'User has been deleted.',
    //                             'success'
    //                         );                       
    //                     }
    //                 })
    //         }
    //     });
    // };
    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeInstructor = user => {
        fetch(`http://localhost:5000/users/instructor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an instructor now`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h1>Manage Users: {users.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Make Admin</th>
                            <th>Make Instructor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />

                                        </div>
                                    </div>
                                </td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className={`text-2xl font-semibold ${user.role === 'admin' ? 'text-success' : user.role === 'instructor' ? 'text-primary' : 'text-warning'}`}>{user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'Student'}</td>
                                <td className="text-center"> {user.role === 'admin' ? <button disabled className="btn btn-square text-3xl">
                                    <FaUserShield></FaUserShield>
                                </button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-square text-3xl">
                                    <FaUserShield className="text-success"></FaUserShield>
                                </button>}
                                </td>
                                <td className="text-center"> {user.role === 'instructor' ? <button disabled className="btn btn-square text-3xl">
                                        <FaUserGraduate></FaUserGraduate>
                                    </button>  : <button onClick={() => handleMakeInstructor(user)} className="btn btn-square text-3xl"><FaUserGraduate className="text-primary"></FaUserGraduate></button>}
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;