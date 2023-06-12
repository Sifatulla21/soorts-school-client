import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { motion } from "framer-motion";
import { Fade, AttentionSeeker } from "react-awesome-reveal";


const PopularClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: popularClasses = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/popularclasses');
        return res.data;
    });
    return (
        <div>
            <Fade>
            <h1 className="text-3xl text-blue-400 font-bold my-12 text-center">This Is Our Popular Classes</h1>
            </Fade>
            <div className="flex items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 m-12">
                    {
                        popularClasses.map(cls =>
                            <AttentionSeeker>

                                <motion.div
                                    initial={{ opacity: 1, scale: 1 }}
                                    whileHover={{ opacity: 2, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                >

                                    <div key={cls._id} className="rounded-2xl shadow-xl p-8 mx-auto max-w-2xl bg-blue-100">
                                      
                                        <div className="mb-4 md:mb-0">

                                            <img
                                                src={cls.image}
                                                alt="Profile"
                                                className="w-48 h-48 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="font-bold my-2">

                                            <h2 className="text-xl font-bold mb-2">{cls.name}</h2>

                                            <p className="mb-4">Instractor Name: {cls.iName}</p>
                                            <p className="mb-4">Price: {cls.price}</p>
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

export default PopularClass;