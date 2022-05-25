import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import './MyReview.css'

const MyReview = () => {
    const [user] = useAuthState(auth);
    const [rating, setRating] = useState();

    const handleRating = event => {
        setRating(event.target.value);
    }

    const handleReview = event => {
        event.preventDefault();

        const review = {
            name: user.displayName,
            email: user.email,
            rating: event.target.rating.value,
            img: event.target.img.value,
            review: event.target.review.value,
        }
        // console.log(review);


        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast('Your item successfully added.')
                    event.target.reset();
                }
            })

    }

    return (
        <section className='review-section'>
            <h3 className='review-title'>Please Add a Review</h3>
            <hr />
            <div className='add-review-container'>
                <div className='review-form'>
                    <form onSubmit={handleReview}>

                        <label htmlFor="name">Your Name</label>
                        <input className='review-input-field' type="text" name="name" id="" value={user.displayName} disabled readOnly required />

                        {/* rating lavel and button handle */}
                        <label htmlFor="rating">Rating must be 1 into 5</label>
                        <input onChange={handleRating} type="number" name="rating" id="rating-input-field" value={rating || ''} placeholder="Rating" required />

                        <label>
                            {rating > 5 && <span className="text-xs label-text text-red-600">Rating must be 1 into 5</span>}
                            {rating < 1 && <span className="text-xs label-text text-red-600">Rating must be 1 into 5</span>}
                        </label>



                        <label className='block' htmlFor="picture">Your Image URL</label>
                        <input className='review-input-field' type="text" name="img" id="" placeholder='Image URL' required />

                        <label htmlFor="review">Type your review</label>
                        <textarea className='address-input-field' name="review" id="" cols="30" rows="2" placeholder='Type your review' required></textarea>

                        <input disabled={rating < 1 || rating > 5} className='btn btn-primary confirm-btn' type="submit" value="Submit" />


                    </form>

                </div>
            </div>
        </section>
    );
};

export default MyReview;