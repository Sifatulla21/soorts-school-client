import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const ManageClass = () => { 
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    })
    return (
        <div>
            <h1>Manage Class: {classes.length}</h1>
        </div>
    );
};

export default ManageClass;