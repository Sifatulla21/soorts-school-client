import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/sports.jpg';
import app from '../../../Firebase/firebase.config';
import { AuthContext } from '../../../Provider/AuthProvider';
const SignUp = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from);
            })
            .catch(error => {
                console.log("Error:", error.message);
            })

    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const password = React.useRef({});
    password.current = watch('password', '');
    const onSubmit = data => {
        createUser(data.email, data.password)
        .then(result => {
            updateUser(result.user, result.name, result.photo)
            console.log(result);
            navigate(from);
        })
        .catch(error => {
            console.log(error);
        })
        console.log(data);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
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
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p>Already have an account? <Link className="text-primary font-bold" to="/login">Sign In </Link></p>
                        <div className="divider">OR Sign In With</div>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary btn-block">
                                <FaGoogle className="mr-2"></FaGoogle>Google
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SignUp;