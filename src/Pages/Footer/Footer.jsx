import { Link } from "react-router-dom";
import Logo from "../../Component/Header-&-Footer/Header/Logo";
import {
  FaFacebook,
  FaLinkedin,
  FaEnvira,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-gradient-to-r from-[#2C0B02] to-[#01093A] text-white md:rounded-tl-[160px]">
      <div className="my-container py-10">
        <div className=" grid grid-cols-1 gap-10 md:grid-cols-3 p-4">
          <Link to="/">
            <Logo />
            <h2 className="flex mt-5 gap-2"><FaEnvelope size={22}/> sihabmolla10@gmail.com</h2>
          </Link>
          <div>
            <h2 className="text-xl font-bold ">Website's Menu </h2>
            <ul className="p-4 grid grid-cols-1 md:grid-cols-2 gap-1 font-semibold">
              <li>
                <Link tp="/">Home</Link>{" "}
              </li>
              <li>
                <Link tp="/college">College</Link>{" "}
              </li>
              <li>
                <Link tp="/admission">admission</Link>{" "}
              </li>
              <li>
                <Link tp="/my-college">My College</Link>{" "}
              </li>
              <li>
                <Link tp="/login">Login</Link>{" "}
              </li>
              <li>
                <Link tp="/register">Sign UP</Link>{" "}
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold">Our Social Network</h2>
            <div className=" flex gap-4 mt-4">
              <Link
                to="https://www.facebook.com/sihab.molla.98"
                className=" text-[#d1d1d1] hover:text-white"
              >
                <FaFacebook size={48} />
              </Link>
              <Link
                to="https://www.linkedin.com/in/sihab-molla"
                className=" text-[#d1d1d1] hover:text-white"
              >
                <FaLinkedin size={48} />
              </Link>
              <Link
                to="https://github.com/SihabMolla11"
                className=" text-[#d1d1d1] hover:text-white"
              >
                <FaGithub size={48} />
              </Link>
              <Link
                to="https://euphonious-raindrop-cff51a.netlify.app"
                className=" text-[#d1d1d1] hover:text-white"
              >
                <FaEnvira size={48} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
