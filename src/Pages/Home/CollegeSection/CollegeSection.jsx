import { useEffect, useRef, useState } from "react";
import Heading from "../Heading";
import CollegeCard from "../../../Component/CollgetCard/CollegeCard";

const CollegeSection = () => {
  const [colleges, setColleges] = useState([]);
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);
  const handelClick = () => {
    setSearch(searchRef.current.value);
  };

  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/colleges?search=${search}`)
      .then((res) => res.json())
      .then((data) => setColleges(data));
  }, [search]);
  //   console.log(colleges);

  return (
    <div className="mb-20">
      <Heading
        title="Popular Classes"
        subTitle="Here are Show Some Popular Classes"
      />
      <div className="mt-10">
        <div className=" bg-[#55617e] text-white my-2 rounded-md flex py-3 flex-col md:flex-row  items-center justify-between  md:px-10">
          <h2 className=" text-lg md:text-2xl capitalize font-bold p-2">
            search College by College name
          </h2>

          <div className="form-control">
            <div className="input-group text-black font-semibold">
              <input
                type="text"
                ref={searchRef}
                placeholder="Search…"
                className="input input-bordered w-32 md:w-full"
              />
              <button onClick={handelClick} className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {colleges.slice(0, 3).map((college) => (
          <CollegeCard college={college} key={college?._id} />
        ))}
      </div>
    </div>
  );
};

export default CollegeSection;
