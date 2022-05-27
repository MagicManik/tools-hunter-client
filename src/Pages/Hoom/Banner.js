import React from 'react';
import banner1 from '../../assets/banner/banner (5).png'
import './Banner.css'

const Banner = () => {
    return (
        <section className='bg-primary'>
            <div className='banner-body'>
                <div className=''>
                    <h1 className='banner-heading'>Tools Hunter Manufecture LTD.</h1>
                    <p className='banner-text'>We are Tools Hander manufacturer. We make world class hardware tools using advanced technology. For example hammer, drill machine, screwdriver, wrench, Pliers, Measuring Tape, Chisel, Soldering Iron, shovel, electric saw, hacksaw, paint roller, paintbrush, sandpaper, nut, boltsetc.</p>
                </div>
                <div className='banner-img'>
                    <img src={banner1} alt="banner" />
                </div>
            </div>

        </section>
    );
};

export default Banner;