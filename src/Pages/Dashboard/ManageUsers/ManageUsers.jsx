import { useQuery } from '@tanstack/react-query';
import { FaUserGraduate, FaUserShield, FaUserTimes } from "react-icons/fa";

const ManageUsers = () => {
    const { data: users = [], refatch } = useQuery(['users'], async () => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    const handleDelete = user =>{

    }
    const handleMakeAdmin = id =>{
        
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
                            users.map((user, index )=> <tr key={user._id}>
                                <td>
                                    {index+1}
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
                                <td>user</td>
                                <th>
                                    <button className="btn btn-square text-3xl">
                                    <FaUserShield className="text-primary"></FaUserShield>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleMakeAdmin(user._id)} className="btn btn-square text-3xl">
                                    <FaUserGraduate className="text-primary"></FaUserGraduate>
                                    </button>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(user)} className="btn btn-square text-3xl">
                                    <FaUserTimes className="text-red-600"></FaUserTimes>
                                    </button>
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUsers;