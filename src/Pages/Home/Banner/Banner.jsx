import { Link } from "react-router-dom";
import bannerImg from "../../../assets/bannerImage.jpg";
import {FaArrowRight} from 'react-icons/fa';
const Banner = () => {
  return (
    <div className="mb-10 relative">
      <div className="">
        <img
          src={bannerImg}
          alt=""
          className="w-full h-[500px] object-cover "
        />
        <div className="h-full w-full bg-gradient-to-r from-[#000000bb] to-[#00000000] absolute top-0 text-white ">
          <div className="h-full ps-4 md:ps-14 flex flex-col justify-center space-y-5">
            <h2 className=" text-4xl font-bold">Welcome to College Hunter</h2>
            <p className="text-lg font-semibold">This is College hunter. user Can see many colleges here <br /> User can apply any college for admission from <br /> admission page.  Fell free to go to the admission page and <br /> apply on your favorite university</p>
            <div>
                <Link to="/admission" className=" my-btn-primary">Admission <FaArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
