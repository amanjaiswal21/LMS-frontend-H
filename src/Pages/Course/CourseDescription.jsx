import { useLocation } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { useSelector } from "react-redux";

function CourseDescription() {
    const { state } = useLocation();
    const { role, data } = useSelector((state) => state.auth);

    if (!state) {
        return (
            <HomeLayout>
                <div className="min-h-[90vh] pt-12 px-20 flex items-center justify-center text-white">
                    <p>No course data available</p>
                </div>
            </HomeLayout>
        );
    }

    const { title, description, numberoflectures, createdBy, thumbnail } = state;

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white">
                <div className="relative grid grid-cols-2 gap-10 py-10">
                    <div className="space-y-5">
                        <img
                            className="w-full h-64"
                            src={thumbnail?.secure_url}
                            alt="thumbnail"
                        />
                        <div className="space-y-4">
                            <div className="flex flex-col items-center justify-between text-xl">
                                <p className="font-semibold">
                                    <span className="font-bold text-yellow-500">
                                        Total lectures:{" "}
                                    </span>
                                    {numberoflectures}
                                </p>
                                <p className="font-semibold">
                                    <span className="font-bold text-yellow-500">
                                        Instructor:{" "}
                                    </span>
                                    {createdBy}
                                </p>
                            </div>
                            <div className="mt-5">
                                {role === "ADMIN" || data?.subscription?.status === "ACTIVE" ? (
                                    <button className="w-full px-5 py-3 text-xl font-bold transition-all duration-300 ease-in-out bg-yellow-600 rounded-md hover:bg-yellow-400">
                                        Watch lectures
                                    </button>
                                ) : (
                                    <button className="w-full px-5 py-3 text-xl font-bold transition-all duration-300 ease-in-out bg-yellow-600 rounded-md hover:bg-yellow-400">
                                        Subscribe
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2 text-xl text-left">
                        <h1 className="mb-5 text-3xl font-bold text-yellow-500">
                            {title}
                        </h1>
                        <p className="text-yellow-500">Course description:</p>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;
