import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const SelectedClass = () => {
    const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`/selectedclasses?email=${user?.email}`);
    return res.data;
  });
    return (
        <div>
            <h1>Selected Class: {selectedClasses.length}</h1>
        </div>
    );
};

export default SelectedClass;