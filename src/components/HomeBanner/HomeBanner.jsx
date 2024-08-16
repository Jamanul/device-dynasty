import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const HomeBanner = () => {
    const [bannerData,setBannerData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/banner",{
            method: "GET"
        })
        .then(res=>res.json())
        .then(data=>setBannerData(data))
    },[])
    return (
        <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
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
            bannerData.map(data=><SwiperSlide className="rounded-3xl" key={data._id}><div className="relative"><img src={data.productImage} alt="" />
          <div className="absolute top-3/4 left-2/4">
              <p className="text-white md:text-4xl">{data.productName}</p>
          </div>
          
          </div></SwiperSlide>)
        }
          
        </Swiper>
      </div> 
    );
};

export default HomeBanner;