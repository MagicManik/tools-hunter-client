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
                    <h5 className='text-center font-sans font-bold text-2xl my-5'>Product Details</h5>
                    <img className='img-fluid d-block mx-auto' src={img} alt="" />
                    <h5 className='product-text my-2'>{name}</h5>
                    <h6 className='product-text'>Per Carton: ${price}</h6>
                    <h6 className='product-text'>Product ID: {_id}</h6>
                    {
                        quantity === 0
                            ?
                            <p className='text-danger fw-bold'>Sold Out</p>
                            :
                            <p>Quantity: {quantity} </p>
                    }
                    <small className='inventory-text'>{description}</small>
                    <h6 className='inventory-text my-3'>Supplier: <span className='text-primary'>{available}</span></h6>

                    <div>
                        <button className='restock-btn'>DELIVERD</button>
                    </div>

                </div>


                <div className='container'>

                    <form className='update-form mx-auto'>
                        <h5 className='text-center font-sans font-bold text-2xl my-5'>Please Order Confirm</h5>

                        <label className='mx-6 font-bold' htmlFor="name">Name</label>
                        <input className='add-input-field' type="text" name="name" id="" value={user.displayName} disabled readOnly required />

                        <label className='mx-6 font-bold' htmlFor="name">Email</label>
                        <input className='add-input-field' type="email" name="name" id="" value={user.email} disabled readOnly required />

                        <textarea className='add-input-field' name="address" id="" cols="30" rows="2" placeholder='Enter your address' required></textarea>

                        <input className='add-input-field' type="text" name="price" id="" placeholder='Price' required />

                        <input className='add-input-field' type="number" name="quantity" id="" placeholder='Quantity' required />

                        <input className='add-input-field' type="text" name="url" id="" placeholder='Picture URL' required />

                        <input className='add-input-field' type="text" name="supplier" id="" placeholder='Your name' required />



                        <input className='add-item-button' type="submit" value="Add iTem" />




                    </form>

                </div>
            </div>
        </section>
    );
};

export default Parchase;