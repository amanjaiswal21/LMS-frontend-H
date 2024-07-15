import toast from "react-hot-toast";
import HomeLayout from "../Layout/HomeLayout";
import { useState } from "react";
import { isEmail } from "../Helpers/regexMatcher";
import axiosInstance from "../Helpers/axiosInstance";

function Contact(){
    const [userInput,setUserInput]=useState({
        name:"",
        email:"",
        message:"",
    })

    function handleInputChange(e){
      const{name,value}=e.target;
      setUserInput({
        ...userInput,
        [name]:value
      })
    }

   async function onFormSubmit(e){
        e.preventDefault();
        if(!userInput.email|| !userInput.name|| !userInput.message){
            toast.error("All fields are required");
            return;
        }
        
        if (!isEmail(userInput.email)) {
            toast.error("Invalid email ID");
            return;
          }
        
          try {
            const response=axiosInstance.post("/contact",userInput);
            toast.promise(response,{
                loading:"Submitting your message...",
                success:"Form submitted successfully",
                error:"Failed to submit your form",
            })
            const contactResponse=await response;
            if(contactResponse?.data?.success){
                setUserInput({
                    name:"",
                    email:"",
                    message:"",
                })
            }
          } catch (error) {
            toast.error("operation failed");
          }
    }
return(
    <HomeLayout>
       <div className="flex items-center justify-center h-[100vh]">
       <form 
       noValidate
       onSubmit={onFormSubmit}
       className="flex flex-col items-center justify-center gap-2 p-5 rounded-md text-white shadow-[0_0_10px_black] w-[25rem]">
          <h1 className="text-3xl font-semibold">
            Contact Form
          </h1>
          <div className="flex flex-col w-full gap-1">
           <label htmlFor="name" className="text-xl font-semibold">
            Name
           </label>
           <input 
           className="px-2 py-1 bg-transparent border rounded-sm"
           id="name"
           type="text"
           name="name"
           placeholder="Enter your name"
           onChange={handleInputChange}
           value={userInput.name}
           />
          </div>

          <div className="flex flex-col w-full gap-1">
           <label htmlFor="email" className="text-xl font-semibold">
            Email
           </label>
           <input 
           className="px-2 py-1 bg-transparent border rounded-sm"
           id="email"
           type="email"
           name="email"
           placeholder="Enter your email"
           onChange={handleInputChange}
           value={userInput.email}
           />
          </div>

          <div className="flex flex-col w-full gap-1">
           <label htmlFor="message" className="text-xl font-semibold">
            Message
           </label>
           <textarea 
           className="h-40 px-2 py-1 bg-transparent border rounded-sm resize-none"
           id="message"
           name="message"
           placeholder="Enter your message"
           onChange={handleInputChange}
           value={userInput.message}
           />
          </div>
          <button type="submit"
          className="w-full py-2 text-lg font-semibold transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm cursor-pointer hover:bg-yellow-400">
            Submit
          </button>
        </form>
       </div>
    </HomeLayout>
)
}

export default Contact;