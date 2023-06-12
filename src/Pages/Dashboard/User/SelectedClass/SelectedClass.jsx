import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaRegCreditCard, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../../../Hooks/useAuth';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';

const SelectedClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  const { data: selectedClasses = [], refetch } = useQuery(['classes'], async () => {
    const res = await axiosSecure.get(`/selectedclasses?email=${user?.email}`);
    return res.data;
  });
  const handleDelete = classes => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/selectedclasses/${classes._id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              refetch();
              Swal.fire(
                'Deleted!',
                `${classes.name} has been deleted.` ,
                'success'
              );
            }
          })
      }
    });
  }
  return (
    <div>
      <h1>Selected Class: {selectedClasses.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Instractor</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {
              selectedClasses.map((selectedClasse, index) => <tr key={selectedClasse._id}>
                <td>
                  {index + 1}
                </td>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={selectedClasse.image} alt="Avatar Tailwind CSS Component" />

                    </div>
                  </div>
                </td>
                <td>{selectedClasse.name}</td>
                <td>{selectedClasse.iName}</td>
                <td>{selectedClasse.price}</td>
                <td><button onClick={() => handleDelete(selectedClasse)} className="btn btn-square text-3xl"><FaTrashAlt className="text-red-500"></FaTrashAlt></button></td>
                <td><Link to={`payment/${selectedClasse._id}`}><button className="btn btn-square text-3xl"><FaRegCreditCard className="text-primary"></FaRegCreditCard></button></Link></td>
              </tr>)
            }
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default SelectedClass;