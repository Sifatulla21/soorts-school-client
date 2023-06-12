import React from 'react';
import { FaChalkboardTeacher, FaCheckCircle, FaHistory, FaHome, FaListOl, FaPlusCircle, FaRegBookmark, FaRegistered, FaUserEdit } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstractor';

const Dashboard = () => {
    const [isInstructor] = useInstructor();
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">See Options</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-blue-200 text-black font-bold text-lg pt-48">
                        {
                            isAdmin ? <>
                                <li><Link to="manageusers"><FaUserEdit className="text-2xl"></FaUserEdit> Manage Users</Link></li>
                                <li><Link to="manageclasses"><FaChalkboardTeacher className="text-2xl"></FaChalkboardTeacher> Manage Classes</Link></li>
                            </> : isInstructor ?
                                <>
                                    <li><Link to="myclasses"><FaListOl className="text-2xl"></FaListOl> My Classes</Link></li>
                                    <li><Link to="addclass"><FaPlusCircle className="text-2xl"></FaPlusCircle> Add A Class</Link></li>
                                </> : <>
                                <FaRegBookmark></FaRegBookmark>
                                    <li><Link to="selectedclass"><FaRegBookmark className="text-2xl"></FaRegBookmark>My Selected Classes</Link></li>
                                    <li><Link to="enrolledclass"><FaCheckCircle className="text-2xl"></FaCheckCircle>  My Enrolled Classes</Link></li>
                                    <li><Link to="paymenthistory"><FaHistory className="text-2xl"></FaHistory> Payment History</Link></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><Link to="/"><FaHome className="text-2xl"></FaHome> Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;