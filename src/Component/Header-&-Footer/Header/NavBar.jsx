import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import Avater from "./Avater";
import { useContext } from "react";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";

const NavBar = () => {
  const { user, logout } = useContext(AuthContext);

  const handelLogOut = () => {
    logout()
      .then()
      .catch((error) => {
        console.log(error);
        toast.success("LogOut successful");
      });
  };

  const navItems = (
    <>
      <li>
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/colleges"
        >
          Colleges
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/admission"
        >
          Admission
        </NavLink>
      </li>
      <li>
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/my-college"
        >
          My-College
        </NavLink>
      </li>
      <li className=" md:hidden">
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/Login"
        >
          Login
        </NavLink>
      </li>
      <li className="md:hidden">
        <NavLink
          className="hover:border-b-2 border-[#6b5f56] hover:text-black"
          to="/Register"
        >
          Register
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="my-container">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
            >
              {navItems}
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-6 text-neutral-600 font-medium ">
            {navItems}
          </ul>
        </div>
        <div className="navbar-end">
          <div className="mr-5">
            {user ? (
              <button onClick={handelLogOut} className=" my-btn-small">
                Log Out
              </button>
            ) : (
              <button className="btn btn-sm text-white bg-[#309afd] hover:bg-[#0084ff]">
                <Link to="/login">Login</Link>
              </button>
            )}
          </div>

          <div className="flex gap-2">
            <Avater />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

{
  /* <ul className="flex gap-6 text-neutral-600 font-medium">
                <li>
                  <NavLink
                    className="hover:border-b-2 border-[#6b5f56] hover:text-black"
                    to="/Login"
                  >
                    Login
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="hover:border-b-2 border-[#6b5f56] hover:text-black"
                    to="/Register"
                  >
                    Register
                  </NavLink>
                </li>
              </ul> */
}
