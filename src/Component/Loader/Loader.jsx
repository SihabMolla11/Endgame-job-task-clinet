import { ImSpinner9 } from "react-icons/im";
const Loader = () => {
  return (
    <div className=" flex justify-center mt-[200px] items-center">
      <ImSpinner9 size={96} className=" text-[#FF561E] animate-spin"/>
    </div>
  );
};

export default Loader;
