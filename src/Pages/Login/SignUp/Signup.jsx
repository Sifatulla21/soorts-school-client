import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/sports.jpg';
import app from '../../../Firebase/firebase.config';
import useAuth from '../../../Hooks/useAuth';
import SocialLogin from '../../../Shared/SocialLogin/SocialLogin';
import {Helmet} from 'react-helmet-async';
const SignUp = () => {
    const { createUser, updateUser } = useAuth();
    const [errorMessage, setErrorMessage] = useState('');
    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
    const password = React.useRef({});
    password.current = watch('password', '');
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            updateUser(result.user, data.name, data.photo);
            const savedUser = {name: data.name, email:data.email, photoURL: data.photo, role: 'student'}
            fetch('https://sports-school-server-theta.vercel.app/users',{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(savedUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
            reset();
            navigate(from);
        })
        .catch(error => {
            console.log(error);
            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('User Already Exist');
            } 
        })
        console.log(data);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
             <Helmet>
                <title>Signup | Sports Basic</title>
            </Helmet>
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  shadow-lg hover:shadow-xl transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Named is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name="photo" {...register("photo", { required: true })} placeholder="photo" className="input input-bordered" />
                                {errors.photo && <span className="text-red-600">Photo URL is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[\W_]).+$/
                                })} placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}
                                {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be atleast 6 characters</span>}
                                {errors.password?.type === 'pattern' && <span className="text-red-600">Password Should contain atleast one capital letter character and one special character</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" name="confirm" {...register("confirm", { required: true,
                                 validate: (value) => value === password.current || 'The passwords do not match', })} placeholder="Confirm Password" className="input input-bordered" />
                                {errors.confirm?.type === 'required' && <span className="text-red-600">Confirm password is required</span>}
                                {errors.confirm?.type === 'validate' && <span className="text-red-600">{errors.confirm.message}</span>}
                            </div>
                            <div>
                                {errorMessage && <span className="text-red-600 font-semibold">{errorMessage}</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already have an account? <Link className="text-primary font-bold" to="/login">Sign In </Link></p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;