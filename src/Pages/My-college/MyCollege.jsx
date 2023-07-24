import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthPorvider/AuthProvider";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { RiFeedbackLine } from "react-icons/ri";
import { toast } from "react-hot-toast";

const MyCollege = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const [myCollege, setMyCollege] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/my-college/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyCollege(data));
  }, [user?.email]);

  //   console.log(myCollege);
  const collegeDetail = myCollege?.college;

  const handelFeedback = (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    const myRating = rating;
    const collegeName = collegeDetail?.college_name;
    const collegeImage = collegeDetail?.image;
    const fdName = user?.displayName;
    const fdImage = user?.photoURL;
    const data = {
      message,
      myRating,
      collegeName,
      collegeImage,
      fdName,
      fdImage,
    };

    fetch(`${import.meta.env.VITE_DATABASE_URL}/add-feedback`, {
      method: "POST",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Your Feedback Send Successfully");
          event.target.reset();
        }
      });
  };

  return (
    <div className="my-container my-10">
      <div className="#college Info">
        <div className="flex gap-20 flex-col   md:flex-row justify-between items-cente">
          <div className="w-full">
            <img
              src={collegeDetail?.image}
              alt=""
              className="h-72 w-full rounded-xl"
            />
          </div>
          <div className="w-full">
            <h2 className="text-2xl md:text-4xl  mb-8 font-bold">
              {collegeDetail?.college_name}
            </h2>
            <div className="text-lg md:text-xl font-semibold space-y-3">
              <p className="text-green-600">
                Admission Date Start: {collegeDetail?.admission_date}
              </p>
              <p className="text-red-500">
                Admission Date End: {collegeDetail?.admission_date_end}
              </p>
              <p>College Research Number: {collegeDetail?.research_count}</p>
              <p className="flex gap-4">
                College Rating:{" "}
                <Rating
                  style={{ maxWidth: 100 }}
                  value={collegeDetail?.college_rating}
                  readOnly
                />
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-10 flex flex-col md:flex-row justify-between gap-20">
          <div className="w-full  ">
            <h2 className="text-2xl font-bold">College Detail: </h2>
            <p className="py-4 ">{collegeDetail?.detail}</p>
            <div className=" space-y-2 mt-5 ">
              <h2 className="text-lg font-semibold flex gap-4 items-center">
                {" "}
                <RiFeedbackLine size={24} className="text-blue-600" /> Please
                Give your Feedback{" "}
              </h2>
              <p className="flex gap-2 text-lg font-bold">
                {" "}
                Add Ratting
                <Rating
                  style={{ maxWidth: 150 }}
                  value={rating}
                  onChange={setRating}
                  isRequired
                />
              </p>
              <form onSubmit={handelFeedback}>
                <label htmlFor="feedback">Type Feedback message:</label>
                <br />
                <input
                  type="text"
                  name="message"
                  id="feedback"
                  placeholder="Write your Feedback message"
                  className="input input-bordered w-full max-w-xs h-12 "
                />

                <input
                  type="submit"
                  value="Send Feedback"
                  className="btn text-white bg-[#0099ff] hover:bg-[#006eff] ml-4"
                />
              </form>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-between gap-10">
            <div className="w-full">
              <h2 className="text-2xl font-bold">College Events:</h2>
              <ul className="mt-2 list-disc px-10">
                {collegeDetail?.events.map((spr, index) => (
                  <li key={index}>{spr}</li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-2xl font-bold">College Sports:</h2>
              <ul className="mt-2 list-disc px-10">
                {collegeDetail?.sports.map((spr, index) => (
                  <li key={index}>{spr}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="#application Info my-10 px-28">
        <h3 className=" capitalize text-center mt-24 mb-5 text-2xl md:text-4xl font-bold">
          Admission application
        </h3>
        <div className="border-[1px] border-[#979393] p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <img src={myCollege?.photoUrl} alt="" className="w-52" />
              <p className=" mt-5 text-lg font-semibold">
                Application Id: {myCollege?._id}
              </p>
            </div>
            <div className="text-xl font-semibold space-y-5">
              <p>
                Candidate Name:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.name}
                </span>
              </p>
              <p>
                Candidate Email:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.email}
                </span>
              </p>
              <p>
                Subject:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.subject}
                </span>
              </p>
              <p>
                Phone Number:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.phoneNumber}
                </span>
              </p>
              <p>
                Date Of Birth:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.dateOfBirth}
                </span>
              </p>
              <p>
                Address:{" "}
                <span className=" border-b-2 border-dashed border-black ">
                  {myCollege?.address}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCollege;
