import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import Heading from "../Heading";

const Collapse = ({ children }) => {
  const [collapseToggle, setCollapseToggle] = useState(true);

  return (
    <div className="mt-5 first:mt-0">
      {/* toggle button */}
      <button
        type="button"
        onClick={() => setCollapseToggle((pre) => !pre)}
        className={`py-2 px-3 w-full flex justify-between items-center bg-gray-100 dark:bg-neutral-800`}
        aria-expanded={collapseToggle}
        aria-controls="collapse-content"
      >
        {/* title */}
        <Heading title={"Technologies"} style={"inter"} />

        {/* icon */}
        <MdOutlineKeyboardArrowUp
          className={`${
            collapseToggle ? "rotate-180" : ""
          } transform transition-transform text-xl text-gray-800 dark:text-white`}
        />
      </button>

      <div
        className={`transition-[height] duration-300 overflow-hidden ${
          collapseToggle ? "block" : "hidden"
        }`}
      >
        <div className="p-4 pb-0">{children}</div>
      </div>
    </div>
  );
};

Collapse.propTypes = {
  children: PropTypes.node,
};

export default Collapse;
