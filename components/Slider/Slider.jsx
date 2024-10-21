import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestCard from "../Home/BestProject/BestCard";
import SliderController from "./SliderController";

const Slider = ({ data, label }) => {
  return (
    <div className="text-gray-800 dark:text-white">
      {/* slider controller button */}
      <SliderController />

      {/* slider */}
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        breakpoints={{
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation, Pagination]}
      >
        {/* single slide for best project */}
        {label === "bestProject" &&
          data?.map((value, idx) => (
            <SwiperSlide key={idx}>
              <BestCard />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
};

export default Slider;
