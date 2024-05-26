import HomeLayout from "../Layout/HomeLayout.jsx";
import HomePageImage from "../Assets/images/Homepage.png"

import { Link } from "react-router-dom";


function HomePage() {
    return (
        <HomeLayout>
            <div className="pt-0 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-5xl font-semibold">
                        Find out best
                        <span className="font-bold text-yellow-500"> Online Courses</span>
                    </h1>
                    <p className="text-xl text-gray-200">
                        We have a large library of courses taught by highly skilled and qualified faculties at a very affordable cost.
                    </p>

                    <div className="space-x-6">
                       <Link to="/courses">
                        <button className="px-5 py-5 text-lg font-semibold transition-all ease-in-out bg-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600 duration-3000">
                            Explore Courses
                        </button>
                       </Link>

                       <Link to="/contact">
                        <button className="px-5 py-5 text-lg font-semibold transition-all ease-in-out border border-yellow-500 rounded-md cursor-pointer hover:bg-yellow-600 duration-3000">
                            Contact Us 
                        </button>
                       </Link>
                    </div>
                </div>

                <div className="flex items-center justify-center w-1/2">
                    <img src={HomePageImage} alt="homepage image" />
                </div>
            </div>
        </HomeLayout>
    );
}

export default HomePage;
