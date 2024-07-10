import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { BsPersonCircle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast"
import { createAccount } from "../Redux/Slices/AuthSlice";
import { log10 } from "chart.js/helpers";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [previewImage, setPreviewImage] = useState("");

  const [signupdata, setSignupdata] = useState({
    fullName: "",
    email: "",
    password: "",
    avatar: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setSignupdata({
      ...signupdata,
      [name]: value,
    });
  }

  function getImage(event) {
    event.preventDefault();

    const uploadImage = event.target.files[0];

    if (uploadImage) {
      setSignupdata({
        ...signupdata,
        avatar: uploadImage,
      });
      const fileReader = new FileReader();
      fileReader.readAsDataURL(uploadImage);
      fileReader.addEventListener("load", function () {
        
        setPreviewImage(this.result);
      });
    }
  }

  function createNewAccount(e) {
    e.preventDefault();
  
    if (!signupdata.email || !signupdata.password || !signupdata.fullName || !signupdata.avatar) {
      toast.error("Please enter all the details");
      return;
    }
  
    // Validate name length
    if (signupdata.fullName.length < 5) {
      toast.error("Name should be at least 5 characters long");
      return;
    }
  
    // Validate email format
    if (!signupdata.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      toast.error("Invalid email ID");
      return;
    }
  
    // Validate password format
    if (!signupdata.password.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
      toast.error("Password should be 6-16 characters long with at least one number and one special character");
      return;
    }
  
    const formData = new FormData();
    formData.append("fullName", signupdata.fullName);
    formData.append("email", signupdata.email);
    formData.append("password", signupdata.password);
    formData.append("avatar", signupdata.avatar); // Make sure avatar is correctly appended as a file
  
    // Dispatch create account action
    dispatch(createAccount(formData))
      .then((response) => {
        if (response?.payload?.success) {
          console.log(response);
          console.log(response.payload.user);
          navigate("/"); // Navigate to homepage on successful account creation
          setSignupdata({
            fullName: "",
            email: "",
            password: "",
            avatar: "",
          });
          setPreviewImage("");
        }
      })
      .catch((error) => {
        console.error("Error creating account:", error);
        toast.error("Failed to create account. Please try again later.");
      });
  }
  
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form noValidate onSubmit={createNewAccount} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-2xl font-bold text-center">Registration Page</h1>

          <label htmlFor="image_upload" className="cursor-pointer">
            {previewImage ? (
              <img className="w-24 h-24 m-auto rounded-full" src={previewImage} alt="Preview" />
            ) : (
              <BsPersonCircle className="w-24 h-24 m-auto rounded-full" />
            )}
          </label>
          <input
            onChange={getImage}
            className="hidden"
            name="image_uploads"
            type="file"
            id="image_upload"
            accept=".jpg, .jpeg, .png, .svg"
          />

          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-semibold">Name</label>
            <input
              type="text"
              required
              name="fullName"
              id="fullName"
              placeholder="Enter your name"
              className="px-2 py-1 bg-transparent border"
              onChange={handleUserInput}
              value={signupdata.fullName}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-2 py-1 bg-transparent border"
              onChange={handleUserInput}
              value={signupdata.email}
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
              onChange={handleUserInput}
              value={signupdata.password}
            />
          </div>
          <button type="submit" className="py-2 mt-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm hover:bg-yellow-500">
            Create account
          </button>
          <p className="">
            Already have an account? <Link to="/login" className="cursor-pointer link text-accent">Login</Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Signup;
