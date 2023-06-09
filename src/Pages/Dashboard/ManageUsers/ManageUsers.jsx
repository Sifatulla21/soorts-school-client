import { useQuery } from '@tanstack/react-query';
import { FaUserGraduate, FaUserShield, FaUserTimes } from "react-icons/fa";
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/users/delete/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            );                       
                        }
                    })
            }
        });
    };
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
    const handleMakeInstractor = user => {
        fetch(`http://localhost:5000/users/instractor/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `${user.name} is an instractor now`,
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
                            <th>Make Instractor</th>
                            <th>Delete</th>
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
                                <td>{user.role ? user.role : 'student'}</td>
                                <td> {user.role === 'admin' ? <button disabled className="btn btn-square text-3xl">
                                    <FaUserShield className="text-primary"></FaUserShield>
                                </button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-square text-3xl">
                                    <FaUserShield className="text-primary"></FaUserShield>
                                </button>}
                                </td>
                                <td> {user.role === 'instractor' ? <button disabled className="btn btn-square text-3xl">
                                        <FaUserGraduate className="text-primary"></FaUserGraduate>
                                    </button>  : <button onClick={() => handleMakeInstractor(user)} className="btn btn-square text-3xl"><FaUserGraduate className="text-primary"></FaUserGraduate></button>}
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-square text-3xl">
                                        <FaUserTimes className="text-red-600"></FaUserTimes>
                                    </button>
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