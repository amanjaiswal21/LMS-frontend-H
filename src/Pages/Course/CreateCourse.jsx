import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createNewCourse } from "../../Redux/Slices/courseSlice";
import HomeLayout from "../../Layout/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CreateCourse() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userInput, setUserInput] = useState({
        title: "",
        category: "",
        description: "",
        thumbnail: null,
        previewImage: "",
        createdBy: "",
    });

    function handleImageUpload(e) {
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if (uploadedImage) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load", () => {
                setUserInput({
                    ...userInput,
                    previewImage: fileReader.result,
                    thumbnail: uploadedImage
                });
            });
        }
    }

    function handleUserInput(e) {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();

        if (!userInput.title || !userInput.description || !userInput.category || !userInput.thumbnail || !userInput.createdBy) {
            toast.error("All fields are required");
            return;
        }

        const response = await dispatch(createNewCourse(userInput));

        if (response?.payload?.success) {
            setUserInput({
                title: "",
                category: "",
                description: "",
                thumbnail: null,
                previewImage: "",
                createdBy: "",
            });
        }
        navigate("/courses");
    }

    return (
        <HomeLayout>
            <div className="flex items-center justify-center h-[100vh]">
                <form 
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-[700px] my-10 shadow-[0_0_10px_black] relative"
                >
                    <Link to="/previous-page" className="absolute text-2xl cursor-pointer top-8 link text-accent">
                        <AiOutlineArrowLeft />
                    </Link>

                    <h1 className="text-2xl font-bold text-center">
                        Create New Course
                    </h1>

                    <main className="grid grid-cols-2 gap-x-10">
                        <div className="gap-y-6"> 
                            <div>
                                <label htmlFor="image_upload" className="cursor-pointer">
                                    {userInput.previewImage ? (
                                        <img 
                                            className="w-full m-auto border h-44"
                                            src={userInput.previewImage}
                                            alt="Course Thumbnail"
                                        />
                                    ) : (
                                        <div className="flex items-center w-full m-auto border h-44 justify-centre">
                                            <h1 className="text-lg font-bold">
                                                Upload your course thumbnail
                                            </h1>
                                        </div>
                                    )}
                                </label>
                                <input
                                    className="hidden"
                                    type="file"
                                    id="image_upload"
                                    name="image_upload"
                                    accept=".jpg,.png,.jpeg"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="title" className="text-lg font-semibold">Course Title</label>
                                <input
                                    required
                                    type="text"
                                    name="title"
                                    id="title"
                                    placeholder="Enter course title"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.title}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-6"> 
                            <div className="flex flex-col gap-1">
                                <label htmlFor="createdBy" className="text-lg font-semibold">Course Instructor</label>
                                <input
                                    required
                                    type="text"
                                    name="createdBy"
                                    id="createdBy"
                                    placeholder="Enter course instructor"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.createdBy}
                                    onChange={handleUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="category" className="text-lg font-semibold">Course Category</label>
                                <input
                                    required
                                    type="text"
                                    name="category"
                                    id="category"
                                    placeholder="Enter course category"
                                    className="px-2 py-1 bg-transparent border"
                                    value={userInput.category}
                                    onChange={handleUserInput}
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label htmlFor="description" className="text-lg font-semibold">Course Description</label>
                                <textarea
                                    required
                                    name="description"
                                    id="description"
                                    placeholder="Enter course description"
                                    className="h-24 px-2 py-1 overflow-y-scroll bg-transparent border resize-none"
                                    value={userInput.description}
                                    onChange={handleUserInput}
                                />
                            </div>
                        </div>
                    </main>
                    <button type="submit" className="w-full py-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm hover:bg-yellow-400">
                        Create Course        
                    </button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default CreateCourse;
