import { useQuery } from '@tanstack/react-query';
import React from 'react';

const ManageUsers = () => {
    const {data: users = [], refatch} = useQuery(['users'], async() =>{
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <h1>Manage Users: {users.length}</h1>
        </div>
    );
};

export default ManageUsers;