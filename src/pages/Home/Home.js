import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import Info from './Info';
import "../../styles/Home.css";

const Home = () => {
    return (
        <div clasName = "home-container">
            <Banner />
            <Menu />
            <Info />
        </div>
    );
};

export default Home;