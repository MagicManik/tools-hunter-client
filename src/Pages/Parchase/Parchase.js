import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useTool from '../../hooks/useTool';
import './Parchase.css'

const Parchase = () => {
    const { id } = useParams();
    const [user] = useAuthState(auth);

    const [tool, setTool] = useTool(id);

    const { _id, img, name, description, quantity, available, price } = tool;



    return (
        <section className='bg-accent py-24'>

            <div className='product-container'>
                <div className='container'>
                    <h5 className='text-center font-sans font-bold text-2xl my-3'>Product Details</h5>
                    <img className='img-fluid d-block mx-auto' src={img} alt="" />
                    <h5 className='product-text my-2'>{name}</h5>
                    <small>{description}</small>

                    <h6 className='my-3'>Available: <span className='text-primary'>{available}</span>Pieces</h6>

                    <h6 className='product-text'>Minimum Order: {_id} Pieces</h6>

                    <h6 className='product-text'>Per Unit Price: ${price}</h6>
                    {
                        quantity === 0
                            ?
                            <p className='text-danger fw-bold'>Sold Out</p>
                            :
                            <p>Quantity: {quantity} </p>
                    }
                </div>


                <div className='container'>

                    <form>
                        <h5 className='text-center font-sans font-bold text-2xl my-3'>Please Order Confirm</h5>

                        <label className='mx-6 font-bold' htmlFor="name">Name</label>
                        <input className='confirm-input-field' type="text" name="name" id="" value={user.displayName} disabled readOnly required />

                        <label className='mx-6 font-bold' htmlFor="name">Email</label>
                        <input className='confirm-input-field' type="email" name="name" id="" value={user.email} disabled readOnly required />

                        <label className='mx-6 font-bold' htmlFor="address">Address</label>
                        <textarea className='confirm-input-field' name="address" id="" cols="30" rows="2" placeholder='Enter your address' required></textarea>

                        <label className='mx-6 font-bold' htmlFor="address">Phone</label>
                        <input className='confirm-input-field' type="text" name="price" id="" placeholder='Phone' required />

                        <label className='mx-6 font-bold' htmlFor="address">Quantity</label>
                        <input className='confirm-input-field' type="number" name="quantity" id="" placeholder={`Minimum Quntity ${quantity}`} required />


                        <input className='btn btn-primary confirm-btn' type="submit" value="Confirm Order" />


                    </form>

                </div>
            </div>
        </section>
    );
};

export default Parchase;