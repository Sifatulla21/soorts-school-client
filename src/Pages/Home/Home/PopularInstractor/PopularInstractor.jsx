import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import { motion } from "framer-motion";
import { Fade, AttentionSeeker } from "react-awesome-reveal";


const PopularInstractor = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularinstructors = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/popularinstructor');
        return res.data;
    });
    console.log(popularinstructors);
    return (

        <div className="container mx-auto">
            <Fade>

            <h1 className="text-3xl text-blue-400 font-bold my-12 text-center">Our Most Loved Instractor</h1>
            </Fade>
            
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                    {
                        popularinstructors.map(popularinstructor =>
                            <AttentionSeeker  key={popularinstructor._id}>
                                <motion.div
                                    initial={{ opacity: 1, scale: 1 }}
                                    whileHover={{ opacity: 2, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="rounded-2xl shadow-xl p-8 mx-auto max-w-2xl bg-blue-100">
                                       
                                        <div className="mb-4 md:mb-0">
                                            <img
                                                src={popularinstructor.photoURL}
                                                alt="Profile"
                                                className="w-48 h-48 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="font-bold">
                                            <h2 className="text-xl font-bold my-2">{popularinstructor.name}</h2>
                                            <p className="mb-4">Email: {popularinstructor.email} </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AttentionSeeker>)
                    }

                </div>
            </div>

        </div>

    );

}


export default PopularInstractor;