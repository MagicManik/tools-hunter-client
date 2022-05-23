import React from 'react';
import './Tool.css'

const Tool = ({ tool }) => {
    const { img, name, description, quantity, available, price } = tool;
    const sliceDescription = description.slice(0, 80);
    return (
        <div className='tool-body'>
            <img src={img} alt="" />
            <h4>{name}</h4>
            <p>{sliceDescription}</p>
            <p>Available: {available}</p>
            <p>Minimum Order: {quantity}</p>
            <p>Per Unit Price: ${price}</p>

            <div className='buy-now-btn-container'>
                <button className='btn btn-primary'>Buy Now</button>
            </div>

        </div>
    );
};

export default Tool;