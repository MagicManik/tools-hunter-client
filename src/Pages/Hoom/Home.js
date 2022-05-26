import React from 'react';
import Banner from './Banner';
import BussinessSummaries from './BussinessSummaries';
import Contact from './Contact';
import './Home.css'
import OfferCard from './OfferCard';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummaries></BussinessSummaries>
            <Reviews></Reviews>
            <OfferCard></OfferCard>
            <Contact></Contact>
        </main>
    );
};

export default Home;