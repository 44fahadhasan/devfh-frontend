import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { LuLayoutList } from "react-icons/lu";

const PageTitle = ({ title }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className="poppins text-sm text-gray-800 dark:text-white border rounded-full border-gray-200 dark:border-neutral-700 py-2 px-6 mb-7 md:mb-10 inline-block "
    >
      <div className="flex gap-x-2 items-center">
        {/* icon */}
        <LuLayoutList className="text-[#6366F1]" />

        {/* page title */}
        <h4>{title}</h4>
      </div>
    </motion.div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string,
};

export default PageTitle;
