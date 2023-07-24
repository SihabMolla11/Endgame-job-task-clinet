import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";

const MyCollege = () => {
  const { user } = useContext(AuthContext);

  const [myColleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_DATABASE_URL}/applyed-college?email=${
        user?.email
      }`
    )
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, [user?.email]);

  console.log(myColleges);

  return <div className="my-container my-10">
    
  </div>;
};

export default MyCollege;
