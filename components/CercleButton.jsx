import PropTypes from "prop-types";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const CercleButton = ({ parentStyle, style, icon, srShow, srLabel }) => {
  return (
    <span
      className={`${
        parentStyle || ""
      } text-gray-500 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 border rounded-full border-gray-200 dark:border-neutral-700 focus:outline-none flex items-center justify-center size-8`}
    >
      {srShow && <span className="sr-only">{srLabel}</span>}

      {/* sun icon (light) */}
      <>
        {icon === "light" && (
          <svg
            className={`${style || ""} shrink-0 size-4`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        )}
      </>

      {/* mon icon (dark) */}
      <>
        {icon === "dark" && (
          <svg
            className={`${style || ""} shrink-0 size-4`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        )}
      </>

      {/* hamburger (menu) */}
      <>
        {icon === "hamburger" && (
          <svg
            className={`${style || ""} shrink-0 size-4`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" x2="21" y1="6" y2="6"></line>
            <line x1="3" x2="21" y1="12" y2="12"></line>
            <line x1="3" x2="21" y1="18" y2="18"></line>
          </svg>
        )}
      </>

      {/* cross (close) */}
      <>
        {icon === "close" && (
          <svg
            className={`${style || ""} shrink-0 size-4`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        )}
      </>

      {/* arrow left (<) */}
      <>
        {icon === "arrowLeft" && (
          <span
            className={`swiper-button-prev dark:border-none rounded-full dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-gray-200 ${
              style || ""
            }`}
          >
            <MdOutlineKeyboardArrowLeft />
          </span>
        )}
      </>

      {/* arrow right (>) */}
      <>
        {icon === "arrowRight" && (
          <span
            className={`swiper-button-next dark:border-none rounded-full dark:bg-neutral-800 dark:hover:bg-neutral-700 hover:bg-gray-200 ${
              style || ""
            }`}
          >
            <MdOutlineKeyboardArrowRight />
          </span>
        )}
      </>
    </span>
  );
};

CercleButton.propTypes = {
  parentStyle: PropTypes.string,
  style: PropTypes.string,
  icon: PropTypes.string,
  srShow: PropTypes.bool,
  srLabel: PropTypes.string,
};

export default CercleButton;
