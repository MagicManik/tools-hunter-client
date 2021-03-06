import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import OrderCancle from './OrderCancle';

const MyOrders = () => {

    // get user
    const [user] = useAuthState(auth);

    // put data when data loaded
    const [orders, setOrders] = useState([]);

    // modal button use state "when click button then put data in this state"
    const [order, setOrder] = useState(null);

    const email = user?.email;

    const navigate = useNavigate();



    useEffect(() => {

        if (user) {
            fetch(`https://agile-fortress-81625.herokuapp.com/orders?buyer=${email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {

                    // console.log(res);

                    if (res.status === 401 || res.status === 403) {

                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }

                    return res.json();
                })

                .then(data => {
                    setOrders(data)
                })
        }

    }, [orders, user, email, navigate]);




    return (
        <div>
            <h1 className='profile-title text-primary'>My Order List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Unit Price</th>
                            <th>Total Price</th>
                            <th>Payment</th>
                            <th>Cancel Order</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.tool}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                {/* ekhane problem hote pare */}
                                <td>{order.price * order.quantity}</td>
                                <td>
                                    {(order.price && !order.paid) && <Link to={`/dashboard/pay/${order._id}`}><button className='btn btn-sm bg-green-600 text-white font-bold'>Pay</button></Link>}
                                    {(order.price && order.paid) && <div>
                                        <span className='text-green-600 font-bold'>Paid</span>
                                        <p>Transaction Id: <span className='text-orange-600'>{order.transactionId}</span></p>
                                    </div>}
                                </td>

                                {/* delete modal button */}
                                <td>
                                    {(order.price && !order.paid) ? <label htmlFor="delete-modal" onClick={() => setOrder(order)} className='btn btn-sm btn-error text-white font-bold'>Cancel</label> : ''}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                order && <OrderCancle
                    // go loaded data in OrderCancle component
                    orders={orders}
                    setOrders={setOrders}

                    // go single data in OrderCancle component when modal button click
                    order={order}
                    setOrder={setOrder}
                ></OrderCancle>
            }
        </div>
    );
};

export default MyOrders;