import { useContext, useEffect, useState } from "react";
import ApplyModal from "./ApplyModal";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const AdmitionTableRow = ({ college }) => {
  const { user } = useContext(AuthContext);

  const [myCollege, setMyCollege] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/my-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user?.email]);

  // console.log(myCollege._id);

  const handelAlartMessage = () => {
    Swal.fire(
      "Already you have a application",
      `you already applyed in ${myCollege?.college?.college_name}`,
      "error"
    );
  };

  return (
    <>
      <tr>
        <td>
          <div className="mask  w-12 h-12 avatar">
            <img
              className="rounded-lg"
              src={college?.image}
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </td>
        <td>
          <p className="md:text-lg font-semibold">{college?.college_name}</p>
        </td>
        <td>
          <div>
            {myCollege.email === user?.email ? (
              <button className="my-btn-small" onClick={handelAlartMessage}>
                Apply now
              </button>
            ) : (
              <Link
                className="my-btn-small"
                to={`/college-apply-form/${college?._id}`}
              >
                APPly Now
              </Link>
            )}
          </div>
        </td>
        <ApplyModal college={college} />
      </tr>
    </>
  );
};

export default AdmitionTableRow;

{
  /* <label htmlFor="my_modal_6" className="my-btn-small">
                Apply
              </label> */
}
