import React from 'react';
const Slider = () => {
    return (
        <div className="container mx-auto my-20">
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://rb.gy/84qkg" className="w-full rounded" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] opacity-90 rounded" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Join our <span className="text-red-500">Sports Zone</span> <br /> and unlock your athletic potential. </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">Train with professional coaches and compete at the highest level.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://rb.gy/oenh4" className="w-full rounded" />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] opacity-90 rounded" />
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"> Join our <span className="text-red-500">sports programs</span> <br /> and be part of a winning tradition </h1>
                            <p className="text-lg md:text-xl lg:text-2xl text-white font-bold">Experience the thrill of victory and the camaraderie of teamwork.</p>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
