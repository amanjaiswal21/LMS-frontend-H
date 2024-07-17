import { useState } from "react";
import toast from "react-hot-toast";
import { BsPersonCircle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../../Layout/HomeLayout";
import { AiOutlineArrowLeft } from "react-icons/ai";

function EditProfile(){
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [data,setData]=useState({
        previewImage:"",
        fullName:"",
        avtar:"",
        userId:useSelector((state)=>state?.auth?.data?._id)
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uploadImage=e.target.files[0];
        if(uploadImage){
         const fileReader=new FileReader();
        fileReader.readAsDataURL(uploadImage);
        fileReader.addEventListener("load",()=>{
            setData({
                ...data,
                previewImage:fileReader.result,
                avtar:uploadImage
            })
        })
        }
    }
   
    function handleInputChange(e){
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }

   async function onFormSubmit(e){
        e.preventDefault();
        if(!data.fullName || !data.avtar){
            toast.error("All files are required");
            return;
        }
        if(data.fullName.length<5){
            toast.error("Name cannot be of less than 5 characters");
            return;
        }
        const formData=new FormData();
        formData.append("fullName",data.fullName);
        formData.append("avtar",data.avtar);
        console.log(formData);
        //we are using array because in thunk we can only pass one vaue
        await dispatch(updateProfile({ id: data.userId, data: formData }));

        await dispatch(getUserData());
        navigate("/user/profile");
    }


    return(
      <HomeLayout>
        <div className="flex items-center justify-center h-[100vh]">
            <form 
            onSubmit={onFormSubmit}
            className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black] "
            >
              <h1 className="text-2xl font-semibold text-center ">Edit Profile</h1>
              <label className="cursor-pointer" htmlFor="image_uploads">
                {data.previewImage?(
                  <img
                  className="m-auto rounded-full w-28 h-28"
                  src={data.previewImage}
                   />
                ):(
                  <BsPersonCircle className="m-auto rounded-full w-28 h-28"/>
                )}
              </label>
              <input 
                 onChange={handleImageUpload}
                 className="hidden"
                 type="file"
                 id="image_uploads"
                 name="image_uploads"
                 accept=".jpg ,.png, .svg, .jpeg"
              />
              <div className="flex flex-col gap-1 ">
                <label htmlFor="fullname" className="text-lg font-semibold">Full Name</label>
                <input
                   required
                   type="text"
                   name="fullName"
                   id="fullName"
                   placeholder="Enter your name"
                   className="px-2 py-1 bg-transparent border"
                   value={data.fullName}
                   onChange={handleInputChange}
                />
              </div>
              <button type="submit" className="w-full py-2 text-lg transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm cursor-pointer hover:bg-yellow-400">
                Update profile
              </button>
              <Link to="/user/profile" >
              <p className="flex items-center justify-center w-full gap-2 cursor-pointer link text-accent">
                <AiOutlineArrowLeft/> Go back to profile
              </p>
              </Link>
            </form>
        </div>
      </HomeLayout>
    )
}
export default  EditProfile;