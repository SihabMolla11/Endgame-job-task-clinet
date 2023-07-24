import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = ({ review }) => {
  const { message, myRating, collegeName, collegeImage, fdName, fdImage } =
    review;

  return (
    <>
      <div className="card w-full bg-base-100 shadow-xl">
        <figure>
          <img src={collegeImage} alt="Shoes" className=" w-full h-56" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {collegeName}
            <div className="badge whitespace-nowrap badge-secondary">
              USER REVIEW
            </div>
          </h2>
          <div className=" items-center">
            <div className="flex items-center gap-4 my-5">
              <img
                src={fdImage}
                alt=""
                className="w-14 h-14 rounded-full border-2 border-blue-600"
              />
              <p className=" font-semibold">{fdName}</p>
            </div>
            <div>
              <p className="flex items-center gap-4 font-semibold">
                Rating send from user:{" "}
                <span>
                  <Rating style={{ maxWidth: 100 }} value={myRating} readOnly />
                </span>
              </p>
              <p className=" font-semibold">
                Feedback send from user:{" "}
                <span className=" font-normal">{message}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
