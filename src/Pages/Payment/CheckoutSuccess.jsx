import { useEffect } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout";
import { getUserData } from "../../Redux/Slices/AuthSlice";

function CheckoutSuccess() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserData());
    })

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center text-white">
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="absolute top-0 w-full py-4 text-2xl font-bold text-center bg-green-500 rounded-tl-lg rounded-tr-lg">Payment Successfull</h1>

                    <div className="flex flex-col items-center justify-center px-4 space-y-2">
                        <div className="space-y-2 text-center">
                            <h2 className="text-lg font-semibold">
                                Welcome to the pro bundle
                            </h2>
                            <p className="text-left">
                                Now you can enjoy all the courses.
                            </p>

                        </div>
                        <AiFillCheckCircle className="text-5xl text-green-500" />
                    </div>

                    <Link to="/" className="absolute bottom-0 w-full py-2 text-xl font-semibold text-center transition-all duration-300 ease-in-out bg-green-500 rounded-bl-lg rounded-br-lg hover:bg-green-600">
                        <button>Go to dashboard</button>
                    </Link>
               
                </div>

            </div>
        </HomeLayout>
    )
}

export default CheckoutSuccess;