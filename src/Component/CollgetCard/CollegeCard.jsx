import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CollegeCard = ({ college }) => {
  const {
    college_name,
    admission_date,
    admission_date_end,
    college_rating,
    image,
    research_count,
    _id,
  } = college;

  return (
    <>
      <div className="card w-full bg-[#2e3c5c] shadow-xl relative">
        <figure className="p-2">
          <img
            src={image}
            alt="Shoes"
            className="rounded-md h-[180px] w-full"
          />
        </figure>
        <div className=" space-y-5 p-4 items-center text-white  ">
          <h2 className=" text-2xl font-semibold">{college_name}</h2>
          <div>
            <p>Admission Start Date: {admission_date}</p>
            <p>Admission End Date: {admission_date_end}</p>
            <p>Number of research: {research_count}</p>
            <p className="flex items-center">
              College Ration:{" "}
              <span>
                <Rating
                  style={{ maxWidth: 100 }}
                  value={college_rating}
                  readOnly
                />
              </span>
            </p>
          </div>
          <div className="card-actions justify-center p-8 ">
            <Link className="absolute bottom-4 " to={`/college-detail/${_id}`}>
              <button className="my-btn ">
                show Detail <FaArrowRight size={20} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollegeCard;
