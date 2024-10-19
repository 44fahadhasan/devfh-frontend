import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import { download } from "../data/data";

const DownloadButton = () => {
  const { name, url } = download || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.3,
      }}
    >
      <a
        download={`Md-Fahad-Hasan-${name}`}
        href={url}
        aria-label="Download Resume/CV"
        className="relative inline-flex items-center justify-center px-2 sm:px-3 md:px-4 xl:px-5 py-1 xl:py-2 overflow-hidden font-medium transition duration-300 ease-out border-2 border-[#6366F1] rounded-full shadow-md group inter mt-3 sm:mt-4"
      >
        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#6366F1] group-hover:translate-x-0 ease md:text-xl">
          <FaFileDownload />
        </span>
        <span className="absolute flex items-center justify-center w-full h-full text-[#6366F1] transition-all duration-300 transform group-hover:translate-x-full ease uppercase text-xs sm:text-sm xl:text-base ">
          Resume/CV
        </span>
        <span className="relative invisible">Button Text</span>
      </a>
    </motion.div>
  );
};

export default DownloadButton;
