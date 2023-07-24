import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const ErrorPage = () => {
  return (
    <div>
      <div>
        <div className="flex justify-center">
          <Lottie animationData={error} loop={true} />
        </div>
        <div>
          <h2 className="text-4xl text-center">Page not found</h2>
          <div className="text-center flex justify-center">
            <Link to="/">
              <button className="my-btn-primary flex mt-4 items-center gap-4">
                <FaHome /> <span>Go back to Home</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
