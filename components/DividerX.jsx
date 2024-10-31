import { motion } from "framer-motion";
import PropTypes from "prop-types";

const DividerX = ({ style }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className={`${
        style && style
      } border-b-[1px] border-gray-200 dark:border-neutral-700`}
    ></motion.div>
  );
};

DividerX.propTypes = {
  style: PropTypes.string,
};

export default DividerX;
