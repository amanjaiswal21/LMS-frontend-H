import {FiMenu} from "react-icons/fi";
import {AiFillCloseCircle} from "react-icons/ai";
import {Link} from "react-router-dom"


import Footer from "../Components/Footer";



function HomeLayout({ children }){

    function changeWidth(){
        const drawerSide=document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width='auto';
    }

    function hideDrawer(){
        const element=document.getElementsByClassName("drawer-toggle");
        element[0].checked=false;

        const drawerSide=document.getElementsByClassName('drawer-side');
        drawerSide[0].style.width='0';
    }

    return(
        <div className="min-h-[90vh]">
           <div className="absolute left-0 z-50 drawer w-fit">
             <input type="checkbox" id="my-drawer" className="drawer-toggle" />
             <div className="drawer-content">
                <label htmlFor="my-drawer" className="relative cursor-pointer">
                   <FiMenu
                   onClick={changeWidth}
                   size={"32px"}
                    className="m-4 font-bold text-white "
                   />
                </label>
             </div>
             <div className="w-0 drawer-side ">
               <label htmlFor="my-drawer" className="drawer-overlay">
               </label>
               <ul className="relative w-48 p-4 menu sm:w-80 bg-base-200 text-base-content">
                  <li className="absolute z-50 w-fit right-2 ">
                      <button onClick={hideDrawer}>
                        <AiFillCloseCircle size={24} />
                      </button>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/courses">All Courses</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
               </ul>
             </div>
           </div>

           { children }
           <Footer/>
        </div>
    )
}

export default HomeLayout;