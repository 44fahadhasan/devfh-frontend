import PropTypes from "prop-types";
import { useLocation, useNavigate } from "react-router-dom";
import CercleButton from "../CercleButton";
import Heading from "../Heading";

const ModalHeader = ({ setToggleModal, modalHeading, headStyle }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <div
      className={`flex ${
        modalHeading ? "justify-between" : "justify-end"
      } items-center py-3 px-4 border-b dark:border-neutral-800`}
    >
      {/* modal title */}
      {modalHeading && <Heading title={modalHeading} style={headStyle} />}

      {/* modal close button */}
      <button
        onClick={() => {
          setToggleModal(false);
          navigate(pathname);
        }}
        type="button"
        aria-label="Close"
      >
        {/* close icon */}
        <CercleButton icon={"close"} srShow={true} srLabel={"Close"} />
      </button>
    </div>
  );
};

ModalHeader.propTypes = {
  setToggleModal: PropTypes.func,
  modalHeading: PropTypes.string,
  headStyle: PropTypes.string,
};

export default ModalHeader;
