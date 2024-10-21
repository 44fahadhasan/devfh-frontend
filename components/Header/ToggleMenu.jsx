import PropTypes from "prop-types";
import CercleButton from "../CercleButton";
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
        aria-label="Toggle navigation"
      >
        {/* hamburger icon */}
        <CercleButton icon={"hamburger"} parentStyle={toggle ? "hidden" : ""} />

        {/* close icon */}
        <CercleButton icon={"close"} parentStyle={toggle ? "" : "hidden"} />
      </button>
    </div>
  );
};

ToggleMenu.propTypes = {
  toggle: PropTypes.bool,
  setToggle: PropTypes.func,
};

export default ToggleMenu;
