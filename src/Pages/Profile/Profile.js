import React from 'react';
import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-section'>
            <div className='profile-container'>


                <div className='profile-content'>
                    <div className='know-me'>
                        <h3 className='text-2xl text-center'>Manik Islam Mahi</h3>
                        <h5 className='text-primary text-center mb-5 mt-1'>Programmer & Designer</h5>
                        <label htmlFor="email">EMAIL</label>
                        <h5 className='mb-3'>megamindedmanik@gmail.com</h5>
                        <h3>EDUCATION</h3>
                        <p>2020 – Appeared
                            <br />
                            European University
                            of Bangladesh
                        </p>
                        <p className='my-3'>
                            BACHELORS OF ARTS (B.A.)
                            Department of English.
                            <br />
                            25th Batch.
                        </p>
                    </div>

                    <div className='expertise-container'>
                        <h3 className='text-2xl'>EXPERTISE</h3>

                        <p className='my-1'>HTML5, CSS3, Bootstrap5, Tailwind, DaisyUI, Javascript, ReactJS, MongoDB, REST API, NodeJS, and ExpressJS
                        </p>


                        <h3 className='text-2xl mt-4'>FAMILIAR TO</h3>

                        <p className='my-1'>Recharts, Axios, Azure and WordPress
                        </p>

                        <h3 className='text-2xl mt-4 mb-1'>BEST LIVE WEBSITE LINK</h3>

                        <p><a href="https://fresh-fruits-warehouse-64fd3.web.app/">Fruits Warehouse</a></p>
                        <p><a href="https://shoes-mania.netlify.app/">Shoes Mania</a></p>
                        <p><a href="https://study-hacks-corner.web.app/">Study Hacks Corner</a></p>
                    </div>
                </div>



            </div>

        </div >
    );
};

export default Profile;