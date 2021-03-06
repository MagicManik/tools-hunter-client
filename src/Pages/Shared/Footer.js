import React from 'react';
import './Footer.css'

const Footer = () => {

    return (
        <section className='pt-72 bg-accent'>
            <div className='custom-bg footer-section'>
                <div className='py-10'>
                    <div className='footer-container'>
                        <div className='footer-menu'>
                            <h5>SHOP AND LEARN</h5>
                            <p><a href="/">Store</a></p>
                            <p><a href="/">Hammer</a></p>
                            <p><a href="/">Drill machine</a></p>
                            <p><a href="/">Wrench</a></p>
                            <p><a href="/">Pliers</a></p>
                            <p><a href="/">Screwdriver</a></p>
                        </div>
                        <div className='footer-menu'>
                            <h5>SERVICES</h5>
                            <p></p>
                            <p><a href="/">Hammer</a></p>
                            <p><a href="/">Drill machine</a></p>
                            <p><a href="/">Screwdriver</a></p>
                            <p><a href="/">Wrench</a></p>
                            <p><a href="/">Pliers</a></p>
                        </div>
                        <div className='footer-menu'>
                            <h5>FOR BUSSINESS</h5>
                            <p><a href="/">Driller Ship</a></p>
                            <p><a href="/">Management</a></p>
                            <p><a href="/">Support</a></p>
                            <p><a href="/">Contact Us</a></p>
                            <p><a href="/">Supported Hardware</a></p>
                        </div>
                        <div className='footer-menu'>
                            <h5>PRICING</h5>
                            <p><a href="/blogs">Hot Pricing</a></p>
                            <p><a href="/blogs">Exclusive</a></p>
                            <p><a href="/blogs">Enterprice</a></p>
                            <p><a href="/blogs">Coverage Map</a></p>
                            <p><a href="/">Pricing Overview</a></p>
                        </div>
                        <div className='footer-menu'>
                            <h5>COMPANY</h5>
                            <p><a href="/">About Us</a></p>
                            <p><a href="/blogs">Blogs</a></p>
                            <p><a href="/blogs">Partnership</a></p>
                            <p><a href="/blogs">Careers</a></p>
                            <p><a href="/blogs">Cummunity Center</a></p>

                        </div>
                        <div className='footer-menu'>
                            <h5>SOCIAL</h5>
                            <p><a href="/">Twitter</a></p>
                            <p><a href="/blogs">Facebook</a></p>
                            <p><a href="/blogs">Linkedin</a></p>
                            <p><a href="/blogs">Githum</a></p>
                        </div>
                    </div>
                </div>

                <div className='quote'>
                    <h1>TOOLS HUNTER MANUFECTURE LTD.</h1>
                    <h3 className='text-center text-white'>TRY TO UNDERSTAND USER EXPECTATION</h3>
                    <button className='btn btn-primary mt-4 block mx-auto'>Try Your Best Tool</button>
                </div>
            </div>

            <div className='text-center py-4'>Copyright &copy; 2022 toolsHunter.com</div>
        </section>
    );
};

export default Footer;