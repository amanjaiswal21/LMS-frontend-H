import React from 'react';
import HomeLayout from "../Layout/HomeLayout";
import AboutMainImage from "../Assets/images/AboutMainImage2.jpg";
import apj from "../Assets/images/apj.jpg";
import Bill from "../Assets/images/Bill.webp";
import Einstein from "../Assets/images/Einstein.jpg";
import Nelson from "../Assets/images/Nelson.webp";
import Steve from "../Assets/images/Steve.jpeg";

function AboutUs() {
    return (
        <HomeLayout>
            <div className="flex flex-col pt-20 pl-20 text-white">
                <div className="flex flex-col items-center gap-5 mx-10 lg:flex-row">
                    <section className="w-full space-y-10 text-center lg:w-1/2 lg:text-left">
                        <h1 className="text-5xl font-semibold text-yellow-500">
                            Affordable and Quality Education
                        </h1>
                        <p className="text-xl text-gray-200">
                            Our goal is to provide affordable and quality education to the world. We are providing a platform for aspiring teachers and students to share their skills, creativity, and knowledge to empower and contribute to the growth and wellness of mankind.
                        </p>
                    </section>
                    <div className="flex justify-center w-full lg:w-1/2 lg:justify-end">
                        <img
                            id="test1"
                            style={{
                                filter: "drop-shadow(0px 10px 10px rgb(0,0,0))"
                            }}
                            alt="about main image"
                            className="max-w-full drop-shadow-2xl"
                            src={AboutMainImage}
                        />
                    </div>
                </div>
                <div className="w-full mx-auto my-16 lg:w-2/3 carousel">
                    <div id="slide1" className="relative w-full carousel-item">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={apj} className="w-40 border-2 border-gray-400 rounded-full" alt="APJ Abdul Kalam" />
                            <p className='text-2xl text-center text-gray-200'>
                                "You have to dream before your dreams can come true."
                            </p>
                            <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide5" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide2" className="relative w-full carousel-item">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={Bill} className="w-40 border-2 border-gray-400 rounded-full" alt="Bill Gates" />
                            <p className='text-2xl text-center text-gray-200'>
                                "Don't compare yourself with anyone in this world... if you do so, you are insulting yourself."
                            </p>
                            <h3 className="text-2xl font-semibold">Bill Gates</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide3" className="relative w-full carousel-item">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={Einstein} className="w-40 border-2 border-gray-400 rounded-full" alt="Albert Einstein" />
                            <p className='text-2xl text-center text-gray-200'>
                                "Life is like riding a bicycle. To keep your balance you must keep moving."
                            </p>
                            <h3 className="text-2xl font-semibold">Albert Einstein</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide4" className="relative w-full carousel-item">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={Nelson} className="w-40 border-2 border-gray-400 rounded-full" alt="Nelson Mandela" />
                            <p className='text-2xl text-center text-gray-200'>
                                "Education is the most powerful weapon which you can use to change the world."
                            </p>
                            <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div id="slide5" className="relative w-full carousel-item">
                        <div className='flex flex-col items-center justify-center gap-4 px-[15%]'>
                            <img src={Steve} className="w-40 border-2 border-gray-400 rounded-full" alt="Steve Jobs" />
                            <p className='text-2xl text-center text-gray-200'>
                                "Innovation distinguishes between a leader and a follower."
                            </p>
                            <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;
