import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useTool from '../../hooks/useTool';
import './Parchase.css'

const Parchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    // minimum order quantity state
    const [minQuantity, setMinQuantity] = useState(0);

    const [tool, setTool] = useTool(id);

    const { _id, img, name, description, quantity, available, price } = tool;


    useEffect(() => {
        setMinQuantity(quantity);
    }, [quantity]);

    // minimum order input change handler
    const handleChange = event => {
        setMinQuantity(event.target.value);
    }

    const handleOrder = event => {
        event.preventDefault();

        const orderQuantity = parseInt(event.target.quantity.value);

        const order = {
            tolId: _id,
            tool: name,
            price: price,
            quantity: orderQuantity,
            buyer: user.email,
            buyerName: user.displayName,
            phone: event.target.phone.value,
            address: event.target.address.value
        }

        // console.log(order);

        fetch('https://agile-fortress-81625.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {

                // console.log(data);

                // order success
                if (data.insertedId) {
                    toast.success('Order is placed successfully!!')
                }

                // order fail
                else {
                    toast.error('Fail to place order')
                }

                // update available quantity
                const quantity = parseInt(available - orderQuantity);
                const updatedItem = { quantity };

                // update data to server
                const url = `https://agile-fortress-81625.herokuapp.com/tool/${_id}`

                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: JSON.stringify(updatedItem),
                })
                    .then(response => response.json())
                    .then(data => {
                        // console.log(data);
                        if (data.modifiedCount === 1) {

                        }
                    })

                event.target.reset();
                setMinQuantity(tool.quantity);
            })

    }

    return (
        <section className='bg-accent py-24'>

            <div className='product-container'>
                <div className='container'>
                    <h5 className='text-center font-sans font-bold text-2xl my-3'>Product Details</h5>
                    <img src={img} alt="" />
                    <h5 className='product-text my-2'>{name}</h5>
                    <small>{description}</small>

                    <h6 className='my-3'>Available: <span className='text-primary'>{available}</span> Pieces</h6>

                    <h6 className='product-text'>Minimum Order: {quantity} Pieces</h6>

                    <h6 className='product-text'>Price (Per Unit): ${price}</h6>
                    {
                        available === 0
                        &&
                        <p className='text-danger fw-bold'>Sold Out</p>
                    }
                </div>

                <div className='container'>

                    <form onSubmit={handleOrder}>
                        <h5 className='text-center font-sans font-bold text-2xl my-3'>Please Order Confirm</h5>

                        <label className='mx-6 font-bold' htmlFor="name">Name</label>
                        <input className='confirm-input-field' type="text" name="name" id="" value={user.displayName} disabled readOnly required />

                        <label className='mx-6 font-bold' htmlFor="name">Email</label>
                        <input className='confirm-input-field' type="email" name="name" id="" value={user.email} disabled readOnly required />

                        <label className='mx-6 font-bold' htmlFor="address">Address</label>
                        <textarea className='confirm-input-field' name="address" id="" cols="30" rows="2" placeholder='Enter your address' required></textarea>

                        <label className='mx-6 font-bold' htmlFor="phone">Phone</label>
                        <input className='confirm-input-field' type="text" name="phone" id="" placeholder='Phone' required />

                        <label className='mx-6 font-bold' htmlFor="quntity">Quantity</label>
                        <input onChange={handleChange} value={minQuantity || ''} className='confirm-input-field' type="number" name="quantity" id="" required />

                        <label>
                            {parseInt(quantity) > minQuantity && <span className="mx-6 label-text text-red-600">You cant't place order below than minimum quantity</span>}
                            {minQuantity > parseInt(available) && <span className="mx-6 label-text text-red-600">You cant't place order more than available quantity</span>}
                        </label>

                        <input className='btn btn-primary confirm-btn' type="submit" disabled={parseInt(quantity) > minQuantity || minQuantity > parseInt(available)} value="Confirm Order" />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Parchase;