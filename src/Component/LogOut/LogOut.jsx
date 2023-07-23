import { useContext } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import { toast } from "react-hot-toast";

const LogOut = () => {

    const {logout} = useContext(AuthContext)

  const handelLogOut = () => {
    logout()
      .then()
      .catch((error) => {
        console.log(error);
        toast.success("LogOut successful");
      });
  };

  return (
    <div>
      <button onClick={handelLogOut} className=" my-btn-primary">
        Log Out
      </button>
    </div>
  );
};

export default LogOut;
