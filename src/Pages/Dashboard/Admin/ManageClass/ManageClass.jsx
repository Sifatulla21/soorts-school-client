import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { FaBan, FaCheck, FaCommentAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
const ManageClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const [feedback, setFeedback] = useState('');
    const { data: classes = [], refetch } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });
    const handleFeedback = cls => {
        Swal.fire({
            title: 'Give Feedback',
            html: '<textarea id="swal-input" class="swal2-input"></textarea>',
            focusConfirm: false,
            preConfirm: () => {
                const text = Swal.getPopup().querySelector('#swal-input').value;
                if (!text) {
                    Swal.showValidationMessage('Please enter some text');
                }
                return text;
            }
        }).then((result) => {
            if (result.isConfirmed) {
                setFeedback(result.value);
                fetch(`https://sports-school-server-theta.vercel.app/class/feedback/${cls._id}/feedback`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ feedback }),
                })
                    .then(res => res.json())
                    .then(data => console.log(data))
            }
        });
    };
    const handleApproved = cls => {
        fetch(`https://sports-school-server-theta.vercel.app/class/approved/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Class Approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleDeny = cls => {
        fetch(`https://sports-school-server-theta.vercel.app/class/denied/${cls._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `Class Denied`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Manage Classes: {classes.length}</h1>
            <div className="container mx-auto overflow-x-auto w-full">
                <table className="table border table-zebra w-full text-black font-bold">
                    <thead className="text-black font bold text-lg bg-blue-200">
                        <tr>
                            <th>#</th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Instructor Name</th>
                            <th>Email</th>
                            <th>Available Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Approve</th>
                            <th>Deny</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            classes.map((cls, index) => <tr key={cls._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={cls.image} alt="Avatar Tailwind CSS Component" />

                                        </div>
                                    </div>
                                </td>
                                <td>{cls.name}</td>
                                <td>{cls.iName}</td>
                                <td>{cls.email}</td>
                                <td>{cls.seat}</td>
                                <td>{cls.price}</td>
                                <td className={`text-2xl font-semibold ${cls.status === 'Approved' ? 'text-success' : cls.status === 'Denied' ? 'text-red-600' : 'text-warning'}`}>{cls.status ? cls.status : 'Pending'}</td>
                                <td> {cls.status === 'Approved' ? <button disabled className="btn btn-square text-3xl">
                                    <FaCheck></FaCheck>
                                </button> : cls.status === 'Denied' ? <button disabled className="btn btn-square text-3xl">
                                    <FaCheck></FaCheck>
                                </button> : <button onClick={() => handleApproved(cls)} className="btn btn-square text-3xl">
                                    <FaCheck className="text-success"></FaCheck>
                                </button>}
                                </td>
                                <td> {cls.status === 'Approved' ? <button disabled className="btn btn-square text-3xl">
                                    <FaBan></FaBan >
                                </button> : cls.status === 'Denied' ? <button disabled className="btn btn-square text-3xl">
                                    <FaBan></FaBan >
                                </button> : <button onClick={() => handleDeny(cls)} className="btn btn-square text-3xl">
                                    <FaBan className="text-red-600"></FaBan >
                                </button>}
                                </td>
                                <td>
                                    <button onClick={() => handleFeedback(cls)} className="btn btn-square text-3xl">
                                        <FaCommentAlt className="text-warning"></FaCommentAlt>
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
            <div>

            </div>
        </div>
    );
};

export default ManageClass;