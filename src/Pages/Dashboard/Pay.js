import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Pay = () => {
    const { id } = useParams();

    const url = `https://agile-fortress-81625.herokuapp.com/orders/${id}`;

    const { data: order, isLoading } = useQuery(['order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));


    if (isLoading) {
        return <Loading></Loading>
    }



    const stripePromise = loadStripe('pk_test_51L3z78BJOvKOGPotTl4n4B1tw2NCLMkQMvcY9cwTcTjTbuSxhy47vgcFjgW9G1BsecZece8UYX52cekRqZmPyWaP00Mpf2O9wq');

    return (
        <div>
            <div className="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='font-bold'>Hello, <span className='text-green-600'>{order?.buyerName}</span></p>
                    <h2 className="card-title">Please Pay for {order?.tool}</h2>
                    <p>Your Orderd quantity is <span className='text-green-600'><b>{order?.quantity}</b></span> pieces at per unit price <span className='text-green-600'><b>${order?.price}</b></span></p>
                    <p>Please Pay <span className='text-secondary font-bold'>${order?.price * order?.quantity}</span></p>
                </div>
            </div>
            <div className="card w-50 max-w-lg shadow-2xl bg-base-100 my-12">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        {/* use Checkout Form and input loaded data */}
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Pay;