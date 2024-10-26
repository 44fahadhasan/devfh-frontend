import { useState } from "react";
import { HiFilter } from "react-icons/hi";
import PopupFilter from "./PopupFilter";

const Filters = () => {
  const [toggleCanvas, setToggleCanvas] = useState(false);

  return (
    <>
      <button
        onClick={() => setToggleCanvas(true)}
        type="button"
        className="text-gray-600 dark:text-neutral-400 flex items-center"
      >
        <span className="text-sm">Advance Filter</span>

        {/* search icon */}
        <HiFilter className="text-2xl text-gray-400 dark:text-neutral-600" />
      </button>

      {/* popup filter */}
      <PopupFilter
        toggleCanvas={toggleCanvas}
        setToggleCanvas={setToggleCanvas}
      />
    </>
  );
};

export default Filters;
