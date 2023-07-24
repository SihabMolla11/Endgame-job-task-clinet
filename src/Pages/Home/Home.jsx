import CollegeSection from "./CollegeSection/CollegeSection";
import ImageGallary from "./ImageGallary/ImageGallary";
import RevuSection from "./RevuSection/RevuSection";

const Home = () => {
    return (
        <div className="my-container my-10">
            <CollegeSection/>
            <ImageGallary/>
            <RevuSection/>
        </div>
    );
};

export default Home;