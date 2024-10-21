import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CustomLink = ({ label, url }) => {
  return (
    <Link
      to={url}
      className="font-medium text-sm text-[#6366F1] border-b-2 border-gray-200 dark:border-neutral-700 group-hover:border-[#6366F1] group-focus:border-[#6366F1] transition-all duration-300 focus:outline-none
    "
    >
      {label}
    </Link>
  );
};

CustomLink.propTypes = {
  label: PropTypes.string,
  url: PropTypes.string,
};

export default CustomLink;
