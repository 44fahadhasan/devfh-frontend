import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import CercleButton from "../CercleButton";

const Offcanvas = ({ toggleCanvas, setToggleCanvas, children }) => {
  const offcanvasRef = useRef(null);

  useEffect(() => {
    // handle offcanvas outside click
    const handleOutsideClick = (e) => {
      if (offcanvasRef.current && !offcanvasRef.current.contains(e.target)) {
        setToggleCanvas(false);
      }
    };

    // add event listener
    document.addEventListener("mousedown", handleOutsideClick);

    // clenup event listener
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [setToggleCanvas]);

  return (
    <div
      ref={offcanvasRef}
      className={`fixed top-0 right-0 h-full transform transition-transform duration-300 ease-in-out ${
        toggleCanvas ? "translate-x-0" : "translate-x-full"
      } pt-16 py-10 z-[100] w-64 sm:w-[300px] bg-white border-s border-gray-200 dark:border-neutral-700 overflow-y-auto dark:bg-neutral-900`}
      aria-label="Sidebar"
    >
      {children}

      {/* close button */}
      <button
        onClick={() => setToggleCanvas(false)}
        className="absolute top-4 left-3"
      >
        {/* close icon */}
        <CercleButton icon={"close"} srShow={true} srLabel={"Close"} />
      </button>
    </div>
  );
};

Offcanvas.propTypes = {
  children: PropTypes.node,
  toggleCanvas: PropTypes.bool,
  setToggleCanvas: PropTypes.func,
};

export default Offcanvas;
