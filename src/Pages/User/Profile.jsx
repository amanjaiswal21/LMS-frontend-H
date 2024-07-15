import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../Layout/HomeLayout";
import { Link } from "react-router-dom";

function Profile(){

    const userData=useSelector((state)=>state?.auth?.data);
    const dispatch = useDispatch();

    return(
         <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">
                <div className="my-10 flex flex-col gap-4 rounded-lg p-4 tetx-whitw w-120 shadow-[0_0_10px_black]">
                  <img 
                   src={userData?.avtar?.secure_url}
                   className="w-40 m-auto border border-black rounded-full"
                   />
                   <h3 className="text-xl font-semibold text-center capitalize">
                    {userData?.fullName}
                   </h3>
                   <div className="grid grid-cols-2">
                     <p>Email:</p> <p>{userData?.email}</p>
                     <p>Role:</p> <p>{userData?.role}</p>
                     <p>Subscription:</p>
                      <p>{userData?.subscription?.status==="active"? "Active" :"Inactive"}</p>
                   </div>
                   <div className="flex items-center justify-between gap-2">
                    <Link 
                      to="/changepassword"
                      className="w-1/2 py-2 font-semibold text-center transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm cursor-pointer hover:bg-yellow-400 ">
                         <button>Change password</button>
                   </Link>
                   <Link 
                      to="/user/editprofile"
                      className="w-1/2 py-2 font-semibold text-center transition-all duration-300 ease-in-out bg-yellow-600 rounded-sm cursor-pointer hover:bg-yellow-400 ">
                         <button>Edit profile</button>
                   </Link>
                </div>
                {userData?.subscription?.status==="active" &&(
                 <button className="w-full py-2 font-semibold text-center transition-all duration-300 ease-in-out bg-red-500 rounded-sm cursor-pointer hover:bg-red-400 ">
                    Cancel Subscription
                 </button>
                )}
                </div>
            </div>
         </HomeLayout>
    )
}

export default Profile;