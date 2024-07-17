import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

import HomeLayout from "../../Layout/HomeLayout";

function CheckoutFailure() {
    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center text-white">
                <div className="w-80 h-[26rem] flex flex-col justify-center items-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="absolute top-0 w-full py-4 text-2xl font-bold text-center bg-red-500 rounded-tl-lg rounded-tr-lg">Payment failed</h1>

                    <div className="flex flex-col items-center justify-center px-4 space-y-2">
                        <div className="space-y-2 text-center">
                            <h2 className="text-lg font-semibold">
                                Oops ! Your payment failed
                            </h2>
                            <p className="text-left">
                                Please try again later
                            </p>

                        </div>
                        <RxCrossCircled className="text-5xl text-red-500" />
                    </div>

                    <Link to="/checkout" className="absolute bottom-0 w-full py-2 text-xl font-semibold text-center transition-all duration-300 ease-in-out bg-red-500 rounded-bl-lg rounded-br-lg hover:bg-red-600">
                        <button>Try again</button>
                    </Link>
               
                </div>

            </div>
        </HomeLayout>
    )
}

export default CheckoutFailure;