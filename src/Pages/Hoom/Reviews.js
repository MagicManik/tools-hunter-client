import React from 'react';
import useReviews from '../../hooks/useReviews';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <section className='reviews-section bg-accent'>
            <h1 className='all-customer-reviews'><span className='gradient-text text-4xl font-bold'>Our Customer Reviews</span></h1>
            <div className='reviews-container'>
                {
                    reviews.map(review =>
                        <div key={review._id} className='customer-review-body'>
                            <img src={review.img} alt="" />
                            <div className='customer-review-text'>
                                <h5 className='text-2xl py-3 text-center'>{review.name}</h5>
                                <p className='font-bold text-center my-2'>Rating: {review.rating}</p>
                            </div>
                            <p>{review.review.slice(0, 280)}</p>
                        </div>)
                }
            </div>
        </section>
    );
};

export default Reviews;