import { useQuery } from '@tanstack/react-query';
import React from 'react';
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
            <h1>My Classes: {classes.length} </h1>
        </div>
    );
};

export default MyClass;