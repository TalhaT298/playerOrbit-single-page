import React from 'react';
import Banner from '../Banner/Banner';
import Learning from '../Learning/Learning';
import Tournament from '../Tournament/Tournament';
import Bootcamp from '../Bootcamp/Bootcamp';
import Emni from '../Emni/Emni';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bootcamp></Bootcamp>
            <Learning></Learning>
            <Tournament></Tournament>
            <Emni></Emni>
        </div>
    );
};

export default Home;