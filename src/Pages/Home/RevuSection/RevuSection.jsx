import { useState } from "react";
import Heading from "../heading";
import { useEffect } from "react";
import Review from "./Review";
const RevuSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/all-feedback`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <div>
      <Heading
        title={"This is Review Section"}
        subTitle={"Here are have some reviews of colleges"}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
        {reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default RevuSection;
