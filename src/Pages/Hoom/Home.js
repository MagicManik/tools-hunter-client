import React from 'react';
import Banner from './Banner';
import BussinessSummaries from './BussinessSummaries';
import './Home.css'
import Tools from './Tools';

const Home = () => {
    return (
        <main>
            <Banner></Banner>
            <Tools></Tools>
            <BussinessSummaries></BussinessSummaries>
            <h1>This is home</h1>
        </main>
    );
};

export default Home;