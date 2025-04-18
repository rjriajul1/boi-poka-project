import React from 'react';
import Books from '../Books/Books';
import Banner from '../../components/Banner/Banner';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Books></Books>
        </div>
    );
};

export default Home;