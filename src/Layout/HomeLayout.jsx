import { FiMenu } from "react-icons/fi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Footer from "../Components/Footer";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // for checking if the user is logged in
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);

  // for displaying the option according to the role
  const role = useSelector((state) => state?.auth?.role);

  function changeWidth() {
    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = 'auto';
  }

  function hideDrawer() {
    const element = document.getElementsByClassName("drawer-toggle");
    element[0].checked = false;

    const drawerSide = document.getElementsByClassName('drawer-side');
    drawerSide[0].style.width = '0';
  }
 
  function handleLogout() {
    e.preventDefault();
   // const res=await dispatch(logout());
  // if(res?.payload?.success)
    navigate('/');
  }
  return (
    <div className="min-h-[90vh]">
      <div className="absolute left-0 z-50 drawer w-fit">
        <input type="checkbox" id="my-drawer" className="drawer-toggle" />
        <div className="drawer-content">
          <label htmlFor="my-drawer" className="relative cursor-pointer">
            <FiMenu
              onClick={changeWidth}
              size={"32px"}
              className="m-4 font-bold text-white"
            />
          </label>
        </div>
        <div className="w-0 drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="relative w-48 p-4 menu sm:w-80 bg-base-200 text-base-content">
            <li className="absolute z-50 w-fit right-2">
              <button onClick={hideDrawer}>
                <AiFillCloseCircle size={24} />
              </button>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>

            {isLoggedIn && role === "ADMIN" && (
              <li>
                <Link to="/admin/dashboard">Admin Dashboard</Link>
              </li>
            )}
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            {!isLoggedIn && (
              <li className="bottom-4 absolute w-[90%">
              <div className="flex items-center justify-center w-full">
                <button className="w-full px-4 py-1 font-semibold rounded-md btn-primary">
                  <Link to="/login">Login</Link>
                </button>

                <button className="w-full px-4 py-1 font-semibold rounded-md btn-secondary">
                  <Link to="/signup">Signup</Link>
                </button>
              </div>
            </li>
            )}

           {isLoggedIn && (
              <li className="bottom-4 absolute w-[90%">
              <div className="flex items-center justify-center w-full">
                <button className="w-full px-4 py-1 font-semibold rounded-md btn-primary">
                  <Link to="/user/profile">Profile</Link>
                </button>

                <button className="w-full px-4 py-1 font-semibold rounded-md btn-secondary">
                  <Link onClick={handleLogout}>Logout</Link>
                </button>
              </div>
            </li>
            )}

          </ul>
        </div>
      </div>

      {children}
      <Footer />
    </div>
  );
}

export default HomeLayout;
