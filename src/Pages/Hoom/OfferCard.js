import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OfferCard.css'

const OfferCard = () => {
    return (
        <section className='pakage-container bg-accent'>

            <div className='pakage'>
                <h3 className='pakage-title'>Buy One Get One</h3>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>If you buy some of our specific products, you will get one for free. Click here to see the products</p>
                <hr />
                <button onClick={() => alert('Thank You Click Me !')} className='book-now-btn'>See buy one get one</button>

            </div>

            <div className='pakage golden-package'>
                <h3 className='pakage-title'>Up to 20% Discount</h3>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>20% discount on our exclusive producers. Click here to see the exclusive product</p>
                <hr />
                <button onClick={() => alert('Thank you click me!')} className='book-now-btn'>Set 20% Descount Product</button>


            </div>


            <div className='pakage'>
                <h3 className='pakage-title'>Flash Sale Up To 60 % Discount</h3>
                <p className='pacakage-text'><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>If you buy some of our specific products, you will get one for free. Click here to see the products</p>
                <hr />

                <button onClick={() => alert('Platinum Successfully Booked !')} className='book-now-btn'>See buy one get one</button>

            </div>


        </section>
    );
};

export default OfferCard;