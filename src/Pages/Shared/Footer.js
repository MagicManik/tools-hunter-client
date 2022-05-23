import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <section>
            <div className='bg-primary footer-section'>
                <div className='py-10'>
                    <h1 className='text-center text-4xl mt-20 font-bold'>TOOLS HUNTER MANUFECTURE LTD.</h1>
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

                </div>
            </div>

            <div className='text-center py-4'>Copyright &copy; 2022 toolsHunter.com</div>
        </section>
    );
};

export default Footer;