import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FileMusic } from "react-bootstrap-icons";
import AudioSlider from "./AudioSlider";
import ImageMagnify from "./ImageMagnify";

function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState();

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation, Thumbs]}
        grabCursor={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        className=" slider"
      >
        <SwiperSlide>
          <ImageMagnify />
        </SwiperSlide>
        <SwiperSlide>
          <AudioSlider />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={2}
        modules={[Navigation, Thumbs]}
        className="mt-3 slider-wrapper"
      >
        <SwiperSlide className="border">
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide className="border">
          <FileMusic/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default Slider;
