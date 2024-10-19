import { motion } from "framer-motion";
import PropTypes from "prop-types";

const GradientTitle = ({ title, data }) => {
  const { from, via, to } = data || {};

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className={`bg-gradient-to-r ${from} ${via} ${to} text-transparent bg-clip-text bg-300% animate-gradient font-bold text-4xl sm:text-5xl 2xl:text-6xl`}
    >
      {title}
    </motion.h1>
  );
};

GradientTitle.propTypes = {
  title: PropTypes.string,
  data: PropTypes.object,
};

export default GradientTitle;
