


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typewriter } from 'react-simple-typewriter'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// imported images



import { Slide } from "react-awesome-reveal";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';




const Slider = () => {

    const { data: sliders = [], isLoading } = useQuery({
        queryFn: () => getSliders(),
        queryKey: ['slider']
    })



    const getSliders = async () => {
        const data = await axios.get('banner.json')

        return data.data
    }


    if (isLoading) {
        return <div className="text-center flex flex-col justify-center items-center min-h-screen">
            <span className="loading loading-spinner loading-lg"></span>

        </div>
    }

    console.log(sliders)




    return (


        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >

            {
                sliders.map((slider, index) => <SwiperSlide key={index} className='relative' >

                    <div>
                        <img className='rounded-lg -p-5 ' src={slider.img} alt="" />
                    </div>

                    <div className='absolute'>


                        <div className=' text-2xl md:text-6xl text-gray-200 font-bold '>



                            <Slide direction='down'>
                                <p> Explore The Apartments </p>
                            </Slide >

                            {''} <br />

                            <span className='text-green-400 font-bold'>

                                <Typewriter
                                    words={["Spacious", "Modern", "Luxurious", "Affordable", 'Elegant']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}


                                />

                            </span>
                        </div>

                        <div className='border text-[8px] md:text-xl  md:-rotate-6 -rotate-12 rounded-md absolute max-w-52 md:max-w-96 upperCase roboto p-2 mt-8 bg-green-50 transparent '>

                            <p> Use this Coupon </p>
                            <p> To get  <span className="text-orange-400"> 30% Discount</span> </p>

                            <p className=" text-green-400 font-bold" > Sumon30 </p>

                        </div>






                    </div>

                </SwiperSlide>)
            }


        </Swiper>



    );
};

export default Slider;