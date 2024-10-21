import PropTypes from "prop-types";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import CustomLink from "../CustomLink";

const ModalFooter = ({ show }) => {
  return (
    <>
      {show && (
        <div className="group flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-800">
          <CustomLink label={"View Depth Details of Project"} url={""} />

          {/* icon */}
          <MdOutlineKeyboardArrowRight className="text-xl text-[#6366F1]" />
        </div>
      )}
    </>
  );
};

ModalFooter.propTypes = {
  show: PropTypes.bool,
};

export default ModalFooter;
