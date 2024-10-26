import { motion } from "framer-motion";

const Sort = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
    >
      <label className="text-sm text-gray-600 dark:text-neutral-400">
        Project Type:
        <select className="dark:bg-neutral-800 px-1 py-1 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200  dark:border-none ml-2 focus:border-gray-600">
          <option className="" value="All">
            All
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </label>
    </motion.div>
  );
};

export default Sort;
