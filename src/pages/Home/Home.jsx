import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import About from "./About/About";



const Home = () => {
    return (
        <div>

            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>

            {/* slider */}

            <div>
                <Slider></Slider>
            </div>

            {/* about the building */}

            <div className="mb-10">
                <About></About>
            </div>

        </div>
    );
};

export default Home;