import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import useAdmin from '../../Hooks/useAdmin';
import useAuth from '../../Hooks/useAuth';
import useInstructor from '../../Hooks/useInstractor';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
const Header = () => {
    const { user, logOut } = useAuth();
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        <li><Link to={isAdmin ? '/dashboard/manageusers' : isInstructor ? '/dashboard/myclasses' : 'dashboard/selectedclass'}>Dashboard</Link ></li>
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
        <>
            <div className="navbar z-10 bg-opacity-80 bg-blue-200 text-black mb-4 font-bold">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 bg-opacity-80 shadow bg-black text-white rounded-box w-40 z-50">
                            {navItems}
                        </ul>
                    </div>
                    <Link><img className="h-18 w-24 ml-24" src={logo} alt="" /></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end">
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
        </>
        );
};

        export default Header;