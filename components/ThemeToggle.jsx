import PropTypes from "prop-types";
import { useState } from "react";
import useTheme from "../hooks/useTheme";
import CercleButton from "./CercleButton";

const ThemeToggle = ({ style }) => {
  const [toggle, setToggle] = useState(false);

  const { toggleTheme } = useTheme();

  return (
    <div className={`${style || ""} md:ml-3`}>
      <button
        onClick={() => {
          setToggle(!toggle);
          toggleTheme();
        }}
        type="button"
      >
        {/* dark button */}
        <CercleButton
          srShow={true}
          srLabel={"Dark"}
          icon={"dark"}
          parentStyle={toggle ? "hidden" : "animate-pulse"}
        />

        {/* light button */}
        <CercleButton
          srShow={true}
          srLabel={"Light"}
          icon={"light"}
          parentStyle={toggle ? "animate-pulse" : "hidden"}
        />
      </button>
    </div>
  );
};

ThemeToggle.propTypes = {
  style: PropTypes.string,
};

export default ThemeToggle;
