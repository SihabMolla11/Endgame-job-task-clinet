import { useLoaderData } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const CollgetDetail = () => {
  const collegeDetail = useLoaderData();
  console.log(collegeDetail);
  const {
    college_name,
    admission_date,
    college_rating,
    detail,
    events,
    image,
    research_count,
    sports,
  } = collegeDetail;

  return (
    <div className="my-container my-10">
      <div>
        <h2 className="mb-5 text-2xl md:text-4xl font-bold">{college_name}</h2>
        <img src={image} className="w-full h-[500px] rounded-xl" alt="" />
      </div>
      <div className=" flex gap-24 justify-between flex-col md:flex-row mt-10">
        <div className="w-full">
          <p className="text-lg font-semibold">
            AdmissionDate: {admission_date}
          </p>
          <div className=" flex flex-col md:flex-row justify-between mt-6 gap-16">
            <div className="w-full">
              <h3 className="text-lg font-bold">College Events:</h3>
              <ul className="mt-2 list-disc px-10">
                {events.map((evn, index) => (
                  <li key={index}>{evn}</li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <div className="w-full">
                <h3 className="text-lg font-bold">College Sports:</h3>
                <ul className="mt-2 list-disc px-10">
                  {sports.map((spr, index) => (
                    <li key={index}>{spr}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center mt-5">
            <div>
              <p className="text-lg font-semibold text-start ">
                College Research Number: {research_count}
              </p>
            </div>
            <div>
              <p className="flex  items-center gap-2 text-lg font-semibold">
                College Rating:
                <Rating
                  style={{ maxWidth: 100 }}
                  value={college_rating}
                  readOnly
                />
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <h3 className=" font-bold text-xl">College Detail:</h3>
          <p>{detail}</p>
        </div>
      </div>
    </div>
  );
};

export default CollgetDetail;
