import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
import "./Banner.css"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import bgBanner from "../../../public/images/bg-beautiful.png"

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";



const Banner = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <>
      
        <div
         style={{
            backgroundImage: `url(${bgBanner})`
         }} className=" h-[100vh]   w-full flex xl:mb-[650px] 2xl:mb-[550px]  lg:flex-col    flex-col-reverse items-center">
            <div className="hero1">
      <div className="container ">
        <div>
          <h1 className="title text-center">
           Partnering for a Lifetime? It captures the essence of your website's goal of helping life partners find each other for a lifelong journey together.
          </h1>
          <div className="hero_buttons_container">
            <Link to={'/biodatas'}><button className="home1_primary_button text-xl btn btn-primary ">Get started</button> </Link>
          {/* <button className="home1_primary_button">Let’s Get started</button> */}
          </div>
        </div>
      </div>
      {/* <Image
        className="hero1_right_image"
        src={groupImage}
        alt="group image"
      ></Image>
      <Image className="hero1_left_image" src={polygon} alt="polygon"></Image> */}
    </div>
      
             <div className="hero1_slider">
      <div className="container">
        <div className="swipe-container" style={{ position: "relative" }}>
          <Swiper
            spaceBetween={20}
            navigation={{
              nextEl: ".hero_slide_next",
              prevEl: ".hero_slide_prev",
            }}
            autoplay={{
              delay: 2500,
            }}
            modules={[Autoplay, Navigation, Pagination]}
            className="mySwiper"
            style={{ position: "relative" }}
          >
            <SwiperSlide>
              <img
                className="slider_image"
                src="https://i.pinimg.com/originals/0b/76/17/0b7617c02b2356156ff6d44d551d916e.jpg"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="slider_image"
                src="https://wallpapercave.com/wp/wp2707892.jpg"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
          <div>
            <div className="hero_slide_next  hero_slider_navigator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M26 34L36 24L26 14"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 34L22 24L12 14"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="hero_slide_prev hero_slider_navigator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
              >
                <path
                  d="M22 34L12 24L22 14"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36 34L26 24L36 14"
                  stroke="black"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* <div className="slider_footer_card">
            <div className="slider_footer_card_container">
              <ul>
                <li>Focuses on school systems to automate their process</li>
                <li>Provide robust features to schools and students.</li>
                <li>
                  Prioritize and focus on students to learn, engage, and give
                  mobility experience
                </li>
              </ul>
              <button>
                See More
                <span>
                  <svg
                    width="17"
                    height="12"
                    viewBox="0 0 17 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.8222 0L9.64837 1.16829L13.4611 4.97143H0V6.62857H13.4611L9.64004 10.4317L10.8222 11.6L16.6495 5.8L10.8222 0Z"
                      fill="#27AC1F"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
          
        
        </div>
       
        </>
    ); 
};

export default Banner;