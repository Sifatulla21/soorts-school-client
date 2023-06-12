import React, { useEffect } from 'react';
import PopularClass from '../PopularClass/PopularClass';
import PopularInstractor from '../PopularClass/PopularInstractor/PopularInstractor';
import Slider from '../Slider/Slider';

const Home = () => {
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        document.documentElement.classList.toggle('dark', currentTheme === 'dark');
    }, []);
    return (

            <div>
                <Slider></Slider>
                <PopularClass></PopularClass>
                <PopularInstractor></PopularInstractor>
            </div>
    );
};

export default Home;