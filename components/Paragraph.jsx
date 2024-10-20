import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Paragraph = ({ para, style }) => {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className={`${style || ""} text-gray-600 dark:text-neutral-400`}
    >
      {para}
    </motion.p>
  );
};

Paragraph.propTypes = {
  para: PropTypes.string,
  style: PropTypes.string,
};

export default Paragraph;
