import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const MyClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: classes = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`/myclasses?email=${user?.email}`);
    return res.data;
  });
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">My Classes: {classes.length} </h1>
      <div className="container mx-auto overflow-x-auto w-full">
        <table className="table border table-zebra w-full text-black font-bold">
          <thead className="text-black font bold text-lg bg-blue-200">
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Available Seat</th>
              <th>Enrolled Student</th>
              <th>Price</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {
              classes.map((cls, index) => <tr key={cls._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={cls.image} alt="Avatar Tailwind CSS Component" />

                    </div>
                  </div>
                </td>
                <td>{cls.name}</td>
                <td className="text-center">{cls.seat}</td>
                <td className="text-center">0</td>
                <td>{cls.price}</td>
                <td className={`text-2xl font-semibold ${cls.status === 'Approved' ? 'text-success' : cls.status === 'Denied' ? 'text-red-600' : 'text-warning'}`}>{cls.status ? cls.status : 'Pending'}</td>
                <td>{cls.status === 'Denied' && cls?.feedback}</td>
                <td><Link to={`${cls._id}`}><button className="btn btn-square text-3xl"><FaEdit className="text-primary"></FaEdit></button></Link></td>
              </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyClass;