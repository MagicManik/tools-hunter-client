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



    const handleShipping = _id => {
        const payment = {
            status: true,
        }

        fetch(`https://agile-fortress-81625.herokuapp.com/orders/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(payment)
        })
            .then(res => res.json())
            .then(data => {
                // setProcessing(false);
                console.log('Backend data', data);
                toast.success('Shipping Done')
                refetch();
            })

    }


    const handleOrderDelete = id => {

        if (window.confirm('Delete Confirm?')) {
            fetch(`https://agile-fortress-81625.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        toast.success('Delete success');
                        refetch();
                    }
                })
        }

    }




    return (
        <div className="overflow-x-auto bg-accent py-9">
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
                                        {order.status === false && <span className='text-yellow-400'>Pending</span>}

                                        {
                                            (order.paid === true && order.status === true) && <span className='text-green-500'>Shipped</span>
                                        }

                                        {order.transactionId === undefined
                                            && <span className="text-red-500 text-base">Unpaid</span>}
                                    </label>
                                }
                                </td>


                                <td>{
                                    <label className='manage-order-td'>
                                        {order.status === false &&

                                            <button onClick={() => handleShipping(order._id)} className='btn btn-primary btn-xs'>shipped</button>

                                        }


                                        {order.transactionId === undefined &&

                                            <button onClick={() => handleOrderDelete(order._id)} className='btn btn-error btn-xs'>Delete</button>

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