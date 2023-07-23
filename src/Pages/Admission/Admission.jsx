import { useEffect, useState } from "react";
import AdmitionTableRow from "../../Component/AdimationTR/AdmitionTableRow";

const Admission = () => {
  const [colleges, setColleges] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/all-college`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

  return (
    <div className="my-container my-10">
      <div className="overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th>College Image</th>
              <th>College Name</th>
              <th>Apply Button</th>
            </tr>
          </thead>
          <tbody>

            {
                colleges.map(college=><AdmitionTableRow key={college?._id} college={college}/>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admission;
