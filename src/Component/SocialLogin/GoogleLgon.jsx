import { useContext } from "react";
import google from "../../assets/google.png";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const GoogleLgon = () => {
  const { googleSigning, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  const handelGoogleSigning = () => {
    setLoading(true);
    googleSigning()
      .then((user) => {
        toast.success("user login successful");
        navigate("/");
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
        <img src={google} alt="" className="h-20 cursor-pointer" />
      </button>
    </div>
  );
};

export default GoogleLgon;
