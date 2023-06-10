import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const Instructor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['instractor'], async () => {
        const res = await axiosSecure.get('/instructor')
        return res.data;
    })
    return (
        <div className="w-1/2 mx-auto">
            <h1 className="text-3xl font-bold">Instructors: {users.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                {
                  users.map(user => <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-2xl">
                  <div className="mb-4 md:mb-0">
                      <img
                          src={user.photoURL}
                          alt="Profile"
                          className="w-full h-auto object-cover rounded-lg"
                      />
                  </div>
                  <div>
                      <h2 className="text-3xl font-bold mb-2">{user.name}</h2>
                      <p className="text-gray-600 mb-4">{user.email}</p>
                  </div>
              </div>)  
                }
                
            </div>
        </div>
    );
};

export default Instructor;