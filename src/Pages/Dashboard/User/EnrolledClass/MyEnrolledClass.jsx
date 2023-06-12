import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const MyEnrolledClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: enrolledClasses = [], refetch } = useQuery(['enroledclasses'], async () => {
    const res = await axiosSecure.get(`/enroledclasses?email=${user?.email}`);
    return res.data;
  });
  return (
    <div>
      <h1>Enrolled Class: {enrolledClasses.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instractor</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              enrolledClasses.map((enrolledClass, index) => <tr key={enrolledClass._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={enrolledClass.image} alt="Avatar Tailwind CSS Component" />

                    </div>
                  </div>
                </td>
                <td>{enrolledClass.
                  className
                }</td>
                <td>{enrolledClass.instractor}</td>
                <td>{enrolledClass.price}</td>
              </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default MyEnrolledClass;