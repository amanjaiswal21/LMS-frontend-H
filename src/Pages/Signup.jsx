import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function Signup() {
    const dispatch=useDispatch();
    const navigat=useNavigate();

    const [previewImage, setPreviewImage] = useState("");
    
    const[signupdata,setSignupdata] = useState({
        fullName:"",
        email:"",
        password:"",
        avatar:"",
    });

    
 
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-2xl font-bold text-center">Registration Page</h1>

          <label htmlFor="image_upload" className="cursor-pointer">
            {previewImage ? (
              <img className="w-24 h-24 m-auto rounded-full" src={previewImage} alt="Preview" />
            ) : (
              <BsPersonCircle className="w-24 h-24 m-auto rounded-full" />
            )}
          </label>
          <input
            className="hidden"
            name="image_uploads"
            type="file"
            id="image_upload"
            accept=".jpg, .jpeg, .png, .svg"
            
          />
          <div className="flex flex-col gap-1">
             <label htmlFor="email" className="font-semibold">Email</label>
             <input 
             type="email" 
             name="email"
              id="email"
              placeholder="Enter your email"
              className="px-2 py-1 bg-transparent border"
              />

              </div>

              <div className="flex flex-col gap-1">
               <label htmlFor="password" className="font-semibold">Password</label>
             <input 
             type="password" 
             name="password"
              id="password"
              placeholder="Enter your password"
              className="px-2 py-1 bg-transparent border"
              />
          </div>
          <button type="submit" className="py-2 mt-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm hover:bg-yellow-500">
            Create account
          </button>
        <p className="">
            Already have an account ? <Link to="/login" className="cursor-pointer link text-accent">Login</Link>
         </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;
