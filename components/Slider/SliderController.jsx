import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const SliderController = () => {
  return (
    <div className="mb-8 flex items-center justify-end gap-x-7 text-2xl md:text-3xl 2xl:text-4xl dark:text-white disabled:opacity-50 disabled:pointer-events-none text-gray-500">
      {/* prev button */}
      <button className="swiper-button-prev dark:border-none border-gray-200 rounded-full dark:bg-neutral-800 dark:hover:bg-neutral-700 border hover:bg-gray-200">
        <MdOutlineKeyboardArrowLeft />
      </button>

      {/* next button */}
      <button className="swiper-button-next dark:border-none border-gray-200 rounded-full dark:bg-neutral-800 dark:hover:bg-neutral-700 border hover:bg-gray-200">
        <MdOutlineKeyboardArrowRight />
      </button>
    </div>
  );
};

export default SliderController;
