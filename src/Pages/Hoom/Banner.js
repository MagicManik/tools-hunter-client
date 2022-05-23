import React from 'react';
import banner1 from '../../assets/banner/banner (5).png'
import './Banner.css'

const Banner = () => {
    return (
        <section className='bg-primary'>
            <div className='banner-body'>
                <div className=''>
                    <h1 className='banner-heading'>Tools Hunter Manufecture LTD.</h1>
                    <p className='banner-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, iusto! Ducimus quam blanditiis cumque magni repellendus quidem. Reprehenderit nihil cupiditate quam? Possimus ab facilis quasi quod nihil in dolorem voluptas.</p>
                </div>
                <div className='banner-img'>
                    <img src={banner1} alt="banner" />
                </div>
            </div>

        </section>
    );
};

export default Banner;