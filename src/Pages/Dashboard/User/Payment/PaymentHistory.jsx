import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const [axiosSecure] = useAxiosSecure();
    const { user } = useAuth();
    const { data: paymenthistories = [], refetch } = useQuery(['paymenthistory'], async () => {
        const res = await axiosSecure.get(`/paymenthistory?email=${user?.email}`);
        return res.data;
    });
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Class Name</th>
                            <th>Transaction Id</th>
                            <th>Paied Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            paymenthistories.map((paymenthistory, index) => <tr key={paymenthistory._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={paymenthistory.image} alt="Avatar Tailwind CSS Component" />

                                        </div>
                                    </div>
                                </td>
                                <td className="text-center">{paymenthistory.
                                    className
                                }</td>
                                <td className="text-center">{paymenthistory.
                                    transactionId
                                }</td>
                                <td className="text-right">{paymenthistory.price}</td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;