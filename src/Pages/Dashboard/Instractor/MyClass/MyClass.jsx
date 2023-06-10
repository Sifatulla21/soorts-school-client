import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import MyClassCard from './MyClassCard';

const MyClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get(`/myclasses?email=${user?.email}`);
        return res.data;
    });
    return (
        <div>
            <h1>My Classes: {classes.length} </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">

            {
              classes.map(cls => <MyClassCard
                key={cls._id}
                cls={cls}
              >

              </MyClassCard>)
            }
            </div>
        </div>
    );
};

export default MyClass;