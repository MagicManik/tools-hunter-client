import React from 'react';
import Banner from './Banner';
import BussinessSummaries from './BussinessSummaries';
import './Home.css'
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummaries></BussinessSummaries>
            <Reviews></Reviews>
        </main>
    );
};

export default Home;