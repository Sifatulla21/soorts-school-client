import React from 'react';
const Slider = () => {
    return (
        <div className="container mx-auto mb-40">
            <div className="carousel w-full h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=1380&t=st=1686201541~exp=1686202141~hmac=13d9462414814228f442a0c4c3ce848d0396eb6b6cb5656c8dc9f42315154e6e" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/medium-shot-smiley-kids-posing-together_23-2149351802.jpg?w=1380&t=st=1686201565~exp=1686202165~hmac=5ec009c8f27c612fc8176d5eefd44aec788ffbf9f908f673712523710a19ff47" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/sports-teacher-with-her-students_23-2149070768.jpg?w=1380&t=st=1686201591~exp=1686202191~hmac=3b2e92a583a13fd6885c4ff313a2b4ee555416310c46fa19439f0b9d3c39d380" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;
