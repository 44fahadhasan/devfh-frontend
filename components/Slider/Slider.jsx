import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  FreeMode,
  Keyboard,
  Navigation,
  Pagination,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BestCard from "../Cards/BestCard";
import ImgCard from "../ProjectsDetails/ImgCard";
import SliderController from "./SliderController";

const Slider = ({ data, label, controller, isResponsive, paginationType }) => {
  // responsive data for slider
  const responsive = {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  };

  // pagination type
  const paginationStyle = paginationType || "fraction";

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className="text-gray-800 dark:text-white"
    >
      {/* slider controller button */}

      {controller && <SliderController />}

      {/* slider */}
      <Swiper
        keyboard={true}
        pagination={{
          type: paginationStyle,
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        slidesPerView={1}
        spaceBetween={10}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={isResponsive && responsive}
        modules={[Navigation, Pagination, Autoplay, FreeMode, Keyboard]}
      >
        {/* single slide for best project */}
        {label === "bestProject" &&
          data?.projects?.map((project) => (
            <SwiperSlide key={project?._id}>
              <BestCard setToggleModal={data?.setToggleModal} data={project} />
            </SwiperSlide>
          ))}

        {/* single slide for project details page images */}
        {label === "projectDetailsImages" &&
          data?.images?.map((value, idx) => (
            <SwiperSlide key={idx}>
              <ImgCard data={value} />
            </SwiperSlide>
          ))}
      </Swiper>
    </motion.div>
  );
};

Slider.propTypes = {
  data: PropTypes.object,
  label: PropTypes.string,
  paginationType: PropTypes.string,
  controller: PropTypes.bool,
  isResponsive: PropTypes.bool,
};

export default Slider;
