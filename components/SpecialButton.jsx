import PropTypes from "prop-types";

const SpecialButton = ({ label, style }) => {
  return (
    <div className={`${style || ""}`}>
      <button className="text-sm relative inline-flex items-center justify-start px-3 py-2 overflow-hidden font-medium transition-all bg-indigo-500 rounded-full group">
        <span className="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-300 ease-in-out bg-indigo-700 rounded group-hover:-mr-4 group-hover:-mt-4">
          <span className="absolute top-0 right-0 w-6 h-6 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white dark:bg-[#1B1B1B]"></span>
        </span>

        <span className="absolute bottom-0 left-0 w-full h-full transition-all duration-300 ease-in-out delay-200 -translate-x-full translate-y-full bg-indigo-600 rounded-full group-hover:mb-9 group-hover:translate-x-0"></span>

        <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">
          {label}
        </span>
      </button>
    </div>
  );
};

SpecialButton.propTypes = {
  label: PropTypes.string,
  style: PropTypes.string,
};

export default SpecialButton;
