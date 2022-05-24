import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Tool.css'

const Tool = ({ tool }) => {
    const { _id, img, name, description, quantity, available, price } = tool;
    const sliceDescription = description.slice(0, 80);

    const navigate = useNavigate();

    const handleParchase = id => {
        navigate(`/parchase/${id}`)
    }

    return (
        <div className='tool-body'>
            <img src={img} alt="" />
            <h4 className='text-1xl font-bold text-secondary'>{name}</h4>
            <p>{sliceDescription}</p>
            <p>Available: {available}</p>
            <p>Minimum Order: {quantity}</p>
            <p>Per Unit Price: ${price}</p>

            <div className='buy-now-btn-container'>
                <button onClick={() => handleParchase(_id)} className='btn btn-primary'>Buy Now</button>
            </div>

        </div>
    );
};

export default Tool;