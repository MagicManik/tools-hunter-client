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
            <h1>This is home</h1>
        </main>
    );
};

export default Home;