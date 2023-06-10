import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaArrowAltCircleRight } from "react-icons/fa";

const Classes = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['allclasses'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    return (
        <div className="flex items-center justify-center">
            {/* <h1 className="text-3xl font-bold">Classes: {classes.length}</h1> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                {
                  classes.map(cls => <div className="bg-white rounded-2xl shadow-xl p-8 mx-auto max-w-2xl">
                  <div className="mb-4 md:mb-0">
                      <img
                          src={cls.image}
                          alt="Profile"
                          className="w-48 h-48 object-cover rounded-lg"
                      />
                  </div>
                  <div>
                      <h2 className="text-xl font-bold mb-2">{cls.name}</h2>
                      <p className="mb-4">Instractor Name: {cls.iName}</p>
                      <p className="mb-4">Price: {cls.price}</p>
                      <p className="mb-4">Available Seat: {cls.seat}</p>
                  </div> 
                  <button className="btn btn-primary btn-outline w-full font-bold">Select <FaArrowAltCircleRight className="text-xl"></FaArrowAltCircleRight></button>
              </div>)  
                }
                
            </div>
        </div>
    );
};

export default Classes;