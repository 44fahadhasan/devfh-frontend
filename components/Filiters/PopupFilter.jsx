import PropTypes from "prop-types";
import Collapse from "../Collapse/Collapse";
import Offcanvas from "../Offcanvas/Offcanvas";
import CheckBox from "./CheckBox";

const PopupFilter = ({ toggleCanvas, setToggleCanvas }) => {
  return (
    <Offcanvas toggleCanvas={toggleCanvas} setToggleCanvas={setToggleCanvas}>
      <Collapse>
        <CheckBox />
      </Collapse>
    </Offcanvas>
  );
};

PopupFilter.propTypes = {
  toggleCanvas: PropTypes.bool,
  setToggleCanvas: PropTypes.func,
};

export default PopupFilter;
