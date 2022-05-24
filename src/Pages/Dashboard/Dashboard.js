import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'



const Dashboard = () => {



    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content pt-4 pb-16">
                {/* <!-- Page content here --> */}
                {/* <h2 classNameName='text-3xl font-bold text-black-800 text-center my-4'>Welcome To Your Dashboard</h2> */}
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/orders">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add a Reviews</Link></li>
                    <li><Link to="/dashboard/manageorder">Manage All Orders</Link></li>
                    <li><Link to="/dashboard/add">Add a Product</Link></li>
                    <li><Link to="/dashboard/admin">Make Admin</Link></li>
                    <li><Link to="/dashboard/manageproduct">Manage Products</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;