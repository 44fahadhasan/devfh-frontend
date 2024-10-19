import PropTypes from "prop-types";
import SpecialButton from "../SpecialButton";

const ToggleMenu = ({ toggle, setToggle }) => {
  return (
    <div className="md:hidden flex gap-x-3">
      {/* hire me button (small device) */}
      <SpecialButton label={"Hire Me"} />

      {/* toggle button */}
      <button
        onClick={() => setToggle(!toggle)}
        type="button"
        className="size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 disabled:pointer-events-none"
        aria-label="Toggle navigation"
      >
        <svg
          className={`${toggle ? "hidden" : "block"} shrink-0 size-4`}
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

        <svg
          className={`${toggle ? "block" : "hidden"} shrink-0 size-4`}
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
      </button>
    </div>
  );
};

ToggleMenu.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default ToggleMenu;
