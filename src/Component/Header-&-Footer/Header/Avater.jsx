import { useContext } from "react";
import { AuthContext } from "../../../AuthPorvider/AuthProvider";
import { FaUserCircle } from "react-icons/fa";

const Avater = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {user ? (
            <img src={user?.photURL} />
          ) : (
            <div className="text-[#857f7f]">
              <FaUserCircle size={40} />
            </div>
          )}
        </div>
      </label>
    </>
  );
};

export default Avater;
