import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { FaEdit, FaEnvelope, FaUniversity } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import LogOut from "../../Component/LogOut/LogOut";
import UpadateProfileModal from "../../Component/Modals/UpadateProfileModal";

const MyProfile = () => {
  const { loginUser } = useContext(AuthContext);
  const { address, email, name, image, university } = loginUser;

  return (
    <div className="my-container  py-5">
      <div className="  bg-[#93DDF6] rounded-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="w-full rounded-lg shadow-2xl" />
          <div className="w-full">
            <h1 className="text-lg md:text-4xl semibold">Name: {name}</h1>
            <div className=" space-y-5 my-5">
              <p className="flex  gap-4 font-bold text-xl ">
                <FaEnvelope className=" text-[#7070f5]" size={24} /> Email:{" "}
                {email}
              </p>
              <p className="flex  gap-4 font-bold text-xl ">
                <HiOutlineLocationMarker
                  className=" text-[#7070f5]"
                  size={24}
                />
                Address: {address}
              </p>
              <p className="flex  gap-4 font-bold text-xl ">
                <FaUniversity className=" text-[#7070f5]" size={24} />
                University: {university}
              </p>
            </div>
            <div className="flex gap-2">
              <LogOut />
              <div>
                <button
                  className="my-btn-blue"
                  onClick={() => window.my_modal_2.showModal()}
                >
                  <FaEdit size={24} /> edit detail
                </button>
              </div>
            </div>
          </div>
        </div>
        <UpadateProfileModal loginUser={loginUser} />
      </div>
    </div>
  );
};

export default MyProfile;
