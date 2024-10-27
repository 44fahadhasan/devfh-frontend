import PropTypes from "prop-types";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";

const Modal = ({
  toggleModal,
  setToggleModal,
  modalHeading,
  show,
  data,
  modalName,
  headStyle,
  _id,
}) => {
  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white/30 dark:bg-neutral-800/30 backdrop-blur-sm transition-opacity duration-500 overflow-x-hidden overflow-y-auto ${
          toggleModal ? "pointer-events-auto" : "hidden pointer-events-none"
        }`}
        aria-hidden={!toggleModal}
      >
        {/* modal content */}
        <div
          className={`bg-white dark:bg-neutral-900 border dark:border-neutral-800 shadow-xl rounded-xl transition-all duration-500 ${
            toggleModal ? " opacity-100" : " opacity-0"
          } sm:max-w-4xl m-3 sm:mx-auto`}
          role="dialog"
          aria-modal="true"
        >
          {/* modal header */}
          <ModalHeader
            setToggleModal={setToggleModal}
            modalHeading={modalHeading}
            headStyle={headStyle}
          />

          {/* modal body */}
          <ModalBody data={data} modalName={modalName} />

          {/* modal footer */}
          <ModalFooter show={show} _id={_id} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  show: PropTypes.bool,
  toggleModal: PropTypes.bool,
  modalHeading: PropTypes.string,
  modalName: PropTypes.string,
  setToggleModal: PropTypes.func,
  data: PropTypes.array,
  headStyle: PropTypes.string,
  _id: PropTypes.string,
};

export default Modal;
