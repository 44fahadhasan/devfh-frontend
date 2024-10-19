import PropTypes from "prop-types";
import SpecialButton from "../SpecialButton";
import ThemeToggle from "../ThemeToggle";
import ListItem from "./ListItem";

const Menu = ({ toggle }) => {
  return (
    <div
      className={`${
        toggle || "hidden"
      } overflow-hidden transition-all duration-300 basis-full grow md:block`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
        {/* menu lists */}
        <ListItem />

        {/* hire me button (large device) */}
        <SpecialButton label={"Hire Me"} style={"hidden md:inline"} />

        {/* theme controller (large device) */}
        <ThemeToggle style={"hidden md:inline"} />
      </div>
    </div>
  );
};

Menu.propTypes = {
  toggle: PropTypes.bool,
};

export default Menu;
