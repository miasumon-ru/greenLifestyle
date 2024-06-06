


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


import { Link } from 'react-router-dom';

import { Slide  } from "react-awesome-reveal";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';




const Slider = () => {

    const {data : sliders = [], isLoading} = useQuery({
        queryFn : () => getSliders(),
        queryKey : ['slider']
    })



     const getSliders = async() => {
        const data = await axios.get('banner.json')

        return data.data
     }
      

     if(isLoading) {
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
                sliders.map((slider, index)=>  <SwiperSlide key={index} className='relative  ' >

                <div>
                    <img className='rounded-lg -p-5 ' src={slider.img} alt="" />
                </div>

                <div className='absolute'>


                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>

                        

                        <Slide direction='down'>
                            <p> Explore The Apartments </p>
                        </Slide >

                        {''} <br />

                        <span className='text-red-200 font-bold'>

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
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>)
            }


            {/* <SwiperSlide className='relative' >

                <div>
                    <img className='rounded-lg' src={juteEarings} alt="" />
                </div>

                <div className='absolute'>


                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>

                        

                        <Slide>
                            <p> Explore The JuteWoody </p>
                        </Slide >

                        {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>

                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide> */}

            {/* <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={juteBag} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={juteHanging} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={woodNecklace} alt="" />
                </div>

                <div className='absolute'>

                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide>

            <SwiperSlide className='relative'>

                <div>
                    <img className='rounded-lg' src={woodSpoon} alt="" />
                </div>

                <div className='absolute'>
                    <p className=' text-2xl md:text-6xl text-gray-200 font-bold '>
                        Explore The JuteWoody {''} <br />

                        <span className='text-green-200 font-bold'>

                            <Typewriter
                                words={["Sustainable", "Eco-Friendly", "Organic", "Charming", 'Rustic']}
                                loop={0}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />

                        </span>
                    </p>


                    <Link to={"/craftsAll"}>
                        <button className='btn mt-10 '> View All </button>
                    </Link>
                </div>

            </SwiperSlide> */}


        </Swiper>



    );
};

export default Slider;