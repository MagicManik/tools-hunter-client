import React, { useState } from 'react';
import './AddAProduct.css'

const AddAProduct = () => {

    const [available, setAvailable] = useState();
    const [quantity, setQuantity] = useState();

    const handleAvailable = event => {
        setAvailable(parseInt(event.target.value));
    }

    const handleQuantity = event => {
        setQuantity(parseInt(event.target.value));
    }


    return (
        <section className='add-product-section'>
            <h3 className='review-title'>Add a Product</h3>
            <hr />
            <div className='add-review-container'>
                <div className='add-product-form'>
                    <form>

                        <input className='add-input-field' type="text" name="name" id="" placeholder='Product Name' />


                        {/* ________________________ */}
                        <input onChange={handleAvailable} type="number" name="available" id="available-input-field" placeholder='Available quantity' />


                        <label>
                            {available < 1 && <span className="text-xs label-text text-red-600">Rating must be 1 into 5</span>}
                        </label>



                        <input onChange={handleQuantity} type="number" name="quantity" id="quantity-input-field" placeholder='Minimum quantity' />

                        <label>
                            {quantity < 1 && <span className="text-xs label-text text-red-600">Rating must be 1 into 5</span>}
                            {quantity > available && <span className="text-xs label-text text-red-600">Rating must be 1 into 5</span>}
                        </label>




                        <input className='add-input-field' type="number" name="price" id="" placeholder='Per Unit Price' />

                        <input className='add-input-field' type="text" name="img" id="" placeholder='Product Image URL' />

                        <textarea className='address-input-field' name="description" id="" cols="30" rows="2" placeholder='Product description' required></textarea>

                        <input className='btn btn-primary confirm-btn' type="submit" value="Submit" />

                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddAProduct;