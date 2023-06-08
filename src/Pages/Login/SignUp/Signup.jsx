import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../../assets/sports.jpg';
import app from '../../../Firebase/firebase.config';
import { AuthContext } from '../../../Provider/AuthProvider';
const SignUp = () => {
    const {createUser, updateUser} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider(); 
    const auth = getAuth(app);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    const [error,setError]= useState('');
    const handleGoogleSignIn = () => {
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const user = result.user;
            navigate(from);
        })
        .catch(error =>{
            console.log("Error:",error.message);
        })
           
    }
    const handleSignup = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        if(password.length<6){
            setError("Password should be at least 6 characters");
        }
        createUser(email,password)
        .then(result =>{updateUser(result.user,name,photo)
            console.log(result);
            navigate(from);
        })
        .catch(error =>{
            console.log(error);
        }) 
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
                        <form onSubmit={handleSignup}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input required type="text" name="name" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input required type="text" name="photo" placeholder="photo" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name="password"  placeholder="password" className="input input-bordered" />
                            </div>
                            <p className="text-red-600/100">{error}</p>
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