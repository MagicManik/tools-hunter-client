import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading';
import './ManageAllOrders.css'


const ManageAllOrders = () => {

    const { data: orders, isLoading, refetch } = useQuery('tools', () =>
        fetch(`https://agile-fortress-81625.herokuapp.com/allorders`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading></Loading>
    }

    const handleShipping = id => {
        console.log(id)

    }




    const handleOrderDelete = id => {
        window.confirm();
        fetch(`http://localhost:5000/orders/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`${id} is deleted`);
                    refetch();
                }
            })
    }




    return (
        <div className="overflow-x-auto bg-accent pt-9">
            <table className="table w-11/12 mx-auto">
                <thead>
                    <tr>
                        <th>Order No:</th>
                        <th>Buyer Name</th>
                        <th>Buyer Email ID</th>
                        <th>Product Name</th>
                        <th>Status</th>
                        <th>Handle Order</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.buyerName}</td>
                                <td>{order.buyer}</td>
                                <td>{order.tool}</td>

                                <td>{
                                    <label className='manage-order-td'>
                                        {order.paid === true && <span>Pending</span>}

                                        {
                                            (order.paid === false && order.status === false) && <span>Shipped</span>
                                        }

                                        {order.transactionId === undefined
                                            && <span className="text-yellow-400 text-base">Unpaid</span>}
                                    </label>
                                }
                                </td>


                                <td>{
                                    <label className='manage-order-td'>
                                        {order.paid === true &&

                                            <button onClick={() => handleShipping(order._id)} className='btn btn-primary'>shipped</button>

                                        }


                                        {order.transactionId === undefined &&

                                            <button onClick={() => handleOrderDelete(order._id)} className='btn btn-primary'>Delete</button>

                                        }

                                    </label>
                                }
                                </td>




                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageAllOrders;