import PropTypes from "prop-types";

const Button = ({ label }) => {
  return (
    <span className="flex cursor-pointer">
      <span className="relative rounded-lg px-5 py-2.5 overflow-hidden group bg-[#6366F1] hover:bg-gradient-to-r hover:from-[#6366F1] hover:to-indigo-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-indigo-400 transition-all ease-out duration-300">
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white bg-opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
        <span className="relative inter font-medium text-sm">{label}</span>
      </span>
    </span>
  );
};

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
