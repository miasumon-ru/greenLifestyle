import { Helmet } from "react-helmet-async";
import Slider from "./Slider/Slider";



const Home = () => {
    return (
        <div>

            <div>
                <Helmet>
                    <title>Home</title>
                </Helmet>
            </div>

            <div>
                <Slider></Slider>
            </div>

        </div>
    );
};

export default Home;