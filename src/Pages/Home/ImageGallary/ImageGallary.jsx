import { useEffect, useState } from "react";
import Heading from "../Heading";

const ImageGallary = () => {
  const [images, setImage] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_DATABASE_URL}/images`)
      .then((res) => res.json())
      .then((data) => setImage(data));
  }, []);
  console.log(images);

  return (
    <div className="mb-20 mt-10">
      <Heading
        title="College image gallery section"
        subTitle="Group photos of various college graduates are provided in this section"
      />

      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8   ">
        {images.map((image) => (
          <div key={image._id}>
            <img
              src={image?.image_url}
              alt=""
              className="mt-5 w-full h-56 rounded-xl hover:scale-110 ease-in-out  duration-500 drop-shadow-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallary;
