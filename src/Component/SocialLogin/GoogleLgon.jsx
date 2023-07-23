import { useContext } from "react";
import google from "../../assets/google.png";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { addUser } from "../../api/user";
const GoogleLgon = () => {
  const { googleSigning, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handelGoogleSigning = () => {
    setLoading(true);
    googleSigning()
      .then((result) => {
        console.log(result.user);
        addUser(result.user);
        toast.success("user login successful");
        navigate(from, { replace: true });
        setLoading(false);
      })
      .catch((error) => {
        toast.error(error.message);
        console.log(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex justify-center">
      <button onClick={handelGoogleSigning}>
        <img src={google} alt="" className="w-56 -mt-6 md:w-72 cursor-pointer" />
      </button>
    </div>
  );
};

export default GoogleLgon;
