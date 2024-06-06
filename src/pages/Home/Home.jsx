import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";
import About from "./About/About";
import Footer from "../../shared/Footer/Footer";



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

            {/* footer */}

            <div>
                <Footer></Footer>
            </div>

        </div>
    );
};

export default Home;