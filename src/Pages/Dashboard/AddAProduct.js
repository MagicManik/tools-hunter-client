import React from 'react';
import './AddAProduct.css'

const AddAProduct = () => {

    return (
        <section className='review-section'>
            <h3 className='review-title'>Add a Product</h3>
            <hr />
            <div className='add-review-container'>
                <div className='add-product-form'>
                    <form>

                        {/* <label htmlFor="name">Product Name</label> */}
                        <input className='add-input-field' type="text" name="name" id="" placeholder='Product Name' />

                        {/* <label htmlFor="quantity">Quantity</label> */}
                        <input className='add-input-field' type="number" name="quantity" id="" placeholder='Product quantity' />

                        {/* <label htmlFor="available">Available Quantity</label> */}
                        <input className='add-input-field' type="number" name="available" id="" placeholder='Available quantity' />


                        {/* <label htmlFor="price">Per Unit Price</label> */}
                        <input className='add-input-field' type="number" name="price" id="" placeholder='Per Unit Price' />

                        {/* <label htmlFor="img">Product Image URL</label> */}
                        <input className='add-input-field' type="text" name="img" id="" placeholder='Picture URL' />

                        {/* <label htmlFor="description">Product Description</label> */}
                        <textarea className='address-input-field' name="description" id="" cols="30" rows="2" placeholder='Product description' required></textarea>

                        <input className='btn btn-primary confirm-btn' type="submit" value="Submit" />


                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddAProduct;