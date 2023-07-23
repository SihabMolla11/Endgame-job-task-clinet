import {  useState } from "react";
import { useEffect } from "react";
import CollegeCard from "../../Component/CollgetCard/CollegeCard";

const Colleges = () => {
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/all-college`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, []);

//   console.log(colleges);

  return (
    <>
      <div className="my-container my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {
                colleges.map(college=><CollegeCard key={college?._id} college={college} />)
            }

        </div>
      </div>
    </>
  );
};

export default Colleges;
