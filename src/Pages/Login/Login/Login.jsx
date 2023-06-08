import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import img from '../../../assets/sports.jpg';
import app from '../../../Firebase/firebase.config';
import { AuthContext } from '../../../Provider/AuthProvider';
const Login = () => {
    const {signIn} = useContext(AuthContext);
    const [error, setError] = useState('');
    const googleProvider = new GoogleAuthProvider(); 
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true });
        })
        .catch(error => {
            const splitedMessage = error.message.split('/');
            const splitedError = splitedMessage[1].split(')');
            setError(splitedError[0].toUpperCase());
        })
    }
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
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  shadow-lg hover:shadow-xl transition duration-1000 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login now!</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input required type="text" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input required type="password" name="password"  placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <h3 className="text-red-500 font-bold">{error}</h3>
                        <p>New to Sports School? <Link className="text-primary font-bold" to="/signup">Sign Up</Link></p>
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

export default Login;