import { useState } from "react";
import HomeLayout from "../Layout/HomeLayout";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {toast} from "react-hot-toast"
import { login } from "../Redux/Slices/AuthSlice";


function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [loginData, setLogindata] = useState({
    email: "",
    password: "",
  });

  function handleUserInput(e) {
    const { name, value } = e.target;
    setLogindata({
      ...loginData,
      [name]: value,
    });
  }

 

  function onLogin(e) {
    e.preventDefault();
  
    if (!loginData.email || !loginData.password ) {
      toast.error("Please enter all the details");
      return;
    }

  
    // Validate email format
    if (!loginData.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      toast.error("Invalid email ID");
      return;
    }


    // Dispatch create account action
    dispatch(login(loginData))
      .then((response) => {
        if (response?.payload?.success) {
          navigate("/"); // Navigate to homepage on successful account creation
          setLogindata({
            email: "",
            password: "",
          });
        }
      })
      .catch((error) => {
        toast.error("Failed to Login. Please try again later.");
      });
  }
  
  return (
    <HomeLayout>
      <div className="flex items-center justify-center h-[90vh]">
        <form noValidate onSubmit={onLogin} className="flex flex-col justify-center gap-3 rounded-lg p-4 text-white w-96 shadow-[0_0_10px_black]">
          <h1 className="text-2xl font-bold text-center">Login Page</h1>


          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="px-2 py-1 bg-transparent border"
              onChange={handleUserInput}
              value={loginData.email}
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
              value={loginData.password}
            />
          </div>
          <button type="submit" className="py-2 mt-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm hover:bg-yellow-500">
            Login
          </button>
          <p className="">
           Donot have an account ? <Link to="/signup" className="cursor-pointer link text-accent">Signup</Link>
          </p>
        </form>
      </div>
    </HomeLayout>
  );
}

export default Login;
