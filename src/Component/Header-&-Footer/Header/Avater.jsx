import { useContext } from "react";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Avater = () => {
  const { user } = useContext(AuthContext);

  return (
    <Menu
      menuButton={
        <MenuButton>
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar hover:border-0 "
          >
            <div className="w-10 rounded-full border-2 border-[#D2D4D7]">
              {user ? (
                <img src={user?.photoURL} />
              ) : (
                <div className="text-[#857f7f]">
                  <FaUserCircle size={36} />
                </div>
              )}
            </div>
          </label>
        </MenuButton>
      }
      transition
    >
      <MenuItem>
        <Link
          className=" text-neutral-500 font-semibold hover:text-black"
          to="/profile"
        >
          My Profile
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          className=" text-neutral-500 font-semibold hover:text-black"
          to="/login"
        >
          Login
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          className=" text-neutral-500 font-semibold hover:text-black"
          to="/register"
        >
          Sign up
        </Link>
      </MenuItem>
    </Menu>
  );
};

export default Avater;
