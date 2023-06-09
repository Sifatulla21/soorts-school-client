import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../Hooks/useAdmin';
import useInstractor from '../Hooks/useInstractor';

const Dashboard = () => {
    const [isInstractor] = useInstractor();
    const [isAdmin] = useAdmin();
    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {
                            isAdmin ? <>
                                <li><Link to="manageusers">Manage Users</Link></li>
                                <li><Link to="manageclasses">Manage Classes</Link></li>
                            </> : isInstractor ?
                                <>
                                    <li><Link to="addclass">Add A Class</Link></li>
                                    <li><Link to="myclasses">My Classes</Link></li>
                                </> : <>
                                    <li><Link>My Selected Classes</Link></li>
                                    <li><Link>My Enrolled Classes</Link></li>
                                    <li><Link>Payment History</Link></li>
                                </>
                        }
                        <div className="divider"></div>
                        <li><Link to="/">Home</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;