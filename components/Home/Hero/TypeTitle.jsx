import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { typeTitles } from "../../../data/data";

const TypeTitle = () => {
  return (
    <motion.h3
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className="inter text-gray-800 dark:text-neutral-200 font-semibold text-2xl sm:text-3xl 2xl:text-4xl"
    >
      {/* type animation component */}
      <TypeAnimation sequence={typeTitles} repeat={Infinity} speed={60} />
    </motion.h3>
  );
};

export default TypeTitle;
