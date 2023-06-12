import React, { useEffect } from 'react';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from './PopularInstractor/PopularInstractor';
import Slider from '../Slider/Slider';
import { Helmet } from 'react-helmet-async';
import UserReview from '../UserReview/UserReview';

const Home = () => {
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, []);
    return (

        <div>
            <Helmet>
                <title>Home | Sports Zone</title>
            </Helmet>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstractor></PopularInstractor>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;