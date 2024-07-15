import { useNavigate } from "react-router-dom";

function Denied(){
    const navigate=useNavigate();
    return(
      <main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
         <h1 className="font-extrabold text-9xl">
            403
         </h1>
         <div className="absolute px-2 text-sm text-white bg-black rounded rotate-12">
            Access Denied
         </div>
         <button className="mt-5"
         onClick={()=>navigate(-1)}>
          
           <span className=" relative block px-8 py-3 bg-[#1A2238] border border-current">
             Go Back 
           </span>
         </button>
      </main>
    )
}
export default  Denied;