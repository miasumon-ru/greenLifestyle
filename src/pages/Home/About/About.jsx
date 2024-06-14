import SectionTitle from "../../../components/SectionTilte/SectionTitle";

import apartment from '../../../assets/apartment.jpg'
import InfoCard from "../../../components/InfoCard/InfoCard";


const About = () => {
    return (
        <div>

            {/* section title */}

            <div>
                <SectionTitle title={"About The Buildings"}></SectionTitle>
            </div>

            <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row justify-between gap-6">
                <div className="space-y-8 p-4">
                    {/* details of the buildings */}

                    <div className="p-4">
                        <h1 className="text-3xl reddit font-bold " > Who we Are ? </h1>
                        <p className="text-gray-400 roboto text-[20px] mt-2"> At Green LifeStyle, we are more than just a property management company—we are a community builder dedicated to creating exceptional living experiences for our residents. With a passion for excellence and a commitment to quality, we offer a diverse portfolio of modern, stylish, and comfortable apartments designed to meet the unique needs of individuals and families. </p>
                    </div>
                    <div className="p-4">
                        <h1 className="text-3xl reddit font-bold " > Our Mission </h1>
                        <p className="text-gray-400 roboto text-[20px] mt-2"> Our mission is to provide not just a place to live, but a place to thrive. We understand that a home is a cornerstone of well-being, which is why we focus on every detail, from innovative design and premium amenities to outstanding customer service. </p>
                    </div>

                </div>

                <div className="flex items-center relative">
                    {/* image */}

                    <img className="rounded-xl" src={apartment} alt="" />

                    {/* <div className='border rounded-md top-48 left-28 -rotate-12 text-center mt-10 upperCase absolute roboto p-5 bg-green-100 transparent '>

                        <p> Use this Coupon </p>
                        <p> To get  <span className="text-orange-400 text-xl"> 30% Discount</span> </p>

                        <p className="text-xl mt-6 text-green-400 font-bold" > Sumon30 </p>

                    </div> */}

                </div>
            </div>

            <div className=" border border-dashed my-8"></div>

            {/* Other Details */}

            <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-2 justify-evenly">

                <InfoCard number={235} infoName={'Luxury Apartments'}></InfoCard>
                <InfoCard number={500} infoName={'Satisfied Reviews'}></InfoCard>
                <InfoCard number={35} infoName={'Years of Development'}></InfoCard>
                <InfoCard number={20} infoName={'Parkings'}></InfoCard>


            </div>



        </div>
    );
};

export default About;