import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../Firebase/firebase.config';

const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
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
    return (
        <div>
            <div className="divider">OR Sign In With</div>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary btn-block">
                                <FaGoogle className="mr-2"></FaGoogle>Google
                            </button>
                        </div>
        </div>
    );
};

export default SocialLogin;