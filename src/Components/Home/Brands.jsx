import React from "react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Brands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      speed={1000}
      modules={[Autoplay]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
    >
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/06/03041624/nike-logo-1995.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2019/12/18163325/3-poloski-adidas-logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12073500/Burberry-Logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12082032/Lacoste-logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12081458/Gucci_logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2019/12/18163122/versace-primary-logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12081137/Chanel_logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12081234/Louis-Vuitton-logo.png"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          className="w-9/12 bg-cover"
          src="https://assets.turbologo.ru/blog/ru/2021/11/12082532/Hermes-Logo.png"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Brands;
