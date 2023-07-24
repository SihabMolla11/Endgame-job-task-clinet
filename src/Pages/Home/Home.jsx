import Banner from "./Banner/Banner";
import CollegeSection from "./CollegeSection/CollegeSection";
import ImageGallary from "./ImageGallary/ImageGallary";
import RevuSection from "./RevuSection/RevuSection";

const Home = () => {
  return (
    <div>
        <div>
            <Banner/>
        </div>
      <div className="my-container my-10">
        <CollegeSection />
        <ImageGallary />
        <RevuSection />
      </div>
    </div>
  );
};

export default Home;
