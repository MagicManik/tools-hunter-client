import React from 'react';
import icon1 from '../../assets/icons/icon (1).png'
import icon2 from '../../assets/icons/icon (2).png'
import icon3 from '../../assets/icons/icon (3).png'
import icon4 from '../../assets/icons/icon (4).png'
import './BussinessSummaries.css';

const BussinessSummaries = () => {


    return (
        <section className='custom-bg summaries-section'>
            <div className='py-10'>
                <h1 className='text-center text-4xl text-white font-bold'>MILLIONS BUSSINESS TRUST US</h1>
                <h3 className='text-center text-2xl my-3'>TRY TO UNDERSTAND USER EXPECTATION</h3>

                <div className='summaries-container'>
                    <div>
                        <img className='summary-img' src={icon1} alt="" />
                        <h1 className='text-5xl font-bold text-center'>100+</h1>
                        <h1 className='text-2xl font-bold text-center'>Countries</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon2} alt="" />
                        <h1 className='text-5xl text-center font-bold'>1M+</h1>
                        <h1 className='text-2xl text-center font-bold'>Happay Clients</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon3} alt="" />
                        <h1 className='text-5xl text-center font-bold'>8K+</h1>
                        <h1 className='text-2xl text-center font-bold'>Reviews</h1>
                    </div>
                    <div>
                        <img className='summary-img' src={icon4} alt="" />
                        <h1 className='text-5xl text-center font-bold'>$120M</h1>
                        <h1 className='text-2xl text-center font-bold'>Annual Revenue</h1>
                    </div>
                </div>
            </div>

            <div className='quote-container bg-red-400'>
                <h1 className='text-center py-3 text-white text-2xl bg-slate-700'>TOOLS HUNTER MANUFECTURE LTD.</h1>
                <h3 className='text-center text-white'>TRY TO UNDERSTAND USER EXPECTATION</h3>
                <button className='btn btn-primary mt-4 block mx-auto'>Try Your Best Tool</button>
            </div>
        </section>
    );
};

export default BussinessSummaries;