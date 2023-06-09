import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/">Instractor</Link></li>
        <li><Link to="/">Classes</Link></li>
        <li><Link to="/dashboard/addclass">Dashboard</Link></li>
        {user?.email ? <>
            <div className="flex">
                <li> <button className="mr-4" onClick={handleLogOut}>Log Out</button> </li>
                <div data-tip={user?.displayName} className="tooltip tooltip-bottom">
                    <img className="w-12 rounded-full" src={user?.photoURL} alt="" />
                </div>
            </div>
        </> : <li><Link to="/login">Login</Link></li>
        }

    </>
    return (
        <div className="navbar bg-neutral text-neutral-content  py-8 px-48 mb-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to="/"><img className="h-18 w-24" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end mr-24">
                <ul className="menu menu-horizontal px-1">

                </ul>
            </div>
        </div>
    );
};

export default Header;