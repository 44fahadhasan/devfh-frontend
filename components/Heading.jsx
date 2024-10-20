import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Heading = ({ title, style }) => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className={`${
        style || "font-semibold text-2xl md:text-4xl"
      } md:leading-tight text-gray-800 dark:text-white inter`}
    >
      {title}
    </motion.h3>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  style: PropTypes.string,
};

export default Heading;
