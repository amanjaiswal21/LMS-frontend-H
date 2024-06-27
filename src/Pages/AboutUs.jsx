import React from 'react';
import HomeLayout from "../Layout/HomeLayout";
import CarouselSlide from '../Components/CarouselSlide';

import { celebrities } from '../Constants/CelebrityData';
import AboutMainImage from "../Assets/images/AboutMainImage2.jpg";


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
                <div className="w-1/2 m-auto my-16 carousel">
                 {celebrities && celebrities.map(celebrity=><CarouselSlide {...celebrity} key={celebrity.slideNumber} totalSlides={celebrities.length}/>)}
                </div>
            </div>
        </HomeLayout>
    );
}

export default AboutUs;
