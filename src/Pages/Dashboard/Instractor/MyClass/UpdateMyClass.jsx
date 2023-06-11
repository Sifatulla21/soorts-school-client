import React from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
const UpdateMyClass = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset } = useForm();
    const updateClass= useLoaderData();
    const {_id, name, iName, email,  price, seat} = updateClass;
    const onSubmit = data => {

                const {name, iName, email, price, seat} = data;
                const newItem = {name, iName, email, price: parseFloat(price), seat}
                console.log(newItem)
                axiosSecure.put(`/updateclass/${_id}`, newItem)
                .then(data => {
                    if(data.data.modifiedCount > 0){
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Class update successfully',
                            showConfirmButton: false,
                            timer: 1500
                          })
                    }
                })
            }

    
    return (
        <div className="w-1/2 p-10 border">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full mb-4">
                <label className="label">
                    <span className="label-text font-semibold">Class Name*</span>
                </label>
                <input defaultValue={name} type="text" placeholder="Class Name"
                    {...register("name", { required: true})}
                    className="input input-bordered w-full " />
            </div>
            <div className="flex my-4">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input defaultValue={iName} readOnly type="text" {...register("iName", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full  ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Email*</span>
                    </label>
                    <input defaultValue={email} readOnly type="text" {...register("email", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                </div>
            </div>
            <div className="flex my-4">

            <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input defaultValue={price} type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Available Seat*</span>
                    </label>
                    <input defaultValue={seat} type="number" {...register("seat", { required: true })} placeholder="Available Seat" className="input input-bordered w-full " />
                </div>
            </div>
            <input className="btn btn-primary mt-4" type="submit" value="Update Class" />
        </form>
    </div>
    );
};

export default UpdateMyClass;