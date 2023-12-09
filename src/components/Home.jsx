// import { useState } from "react";
import UserImg from "../assets/photo.jpeg";
import BgImg from "../assets/background.jpeg";
import SiliconImg from "../assets/silicon_india.jpeg";
import ExcPng from "../assets/excelerate.jpeg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Zoom from "react-reveal/Zoom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"; // Navigation module

// import required modules
import { Navigation } from "swiper/modules";

function Home() {
  const images = [
    UserImg,
    SiliconImg,
    ExcPng,
    "https://images.unsplash.com/photo-1619410283995-43d9134e7656",
  ];
  return (
    <Zoom left>
      <div
        style={{
          backgroundImage: `url(${BgImg})`,
        }}
        className="h-[60vh] bg-cover bg-fixed  grid place-items-center relative mb-[90px]"
      >
        <h1 className="text-5xl text-white">REDDY HARSHA VARDHAN KOLLA</h1>
        <div className="Slider w-64 absolute  mx-auto -bottom-40">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
          >
            {images.map((img) => (
              <SwiperSlide key={img.id}>
                <img
                  loading="lazy"
                  src={img}
                  alt="my imng"
                  className="shadow-slate-500"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Zoom>
  );
}

export default Home;
