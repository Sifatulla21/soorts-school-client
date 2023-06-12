import React, { useEffect } from 'react';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, []);
    return (

        <div>
            <Helmet>
                <title>Home | Sports Basic</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
        </div>
    );
};

export default Home;