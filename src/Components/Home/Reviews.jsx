import React, { use } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "../Shared/ReviewCard";

const Reviews = ({ reviewsPromise }) => {
  const reviews = use(reviewsPromise);
  return (
    <div className="md:px-15">
      <div className=" text-center my-5">
        <h1 className="text-4xl font-bold text-[#0b2b43]">
          Loved by Our Customers
        </h1>
        <p className="mt-3 text-gray-500  ">
          Discover why thousands choose our garments for style, comfort, and
          durability.
        </p>
      </div>
      <Swiper
        loop={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={4}
        coverflowEffect={{
          rotate: 50,
          stretch: "50%",
          depth: 150,
          modifier: 1,
          scale: 0.75,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review}></ReviewCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
