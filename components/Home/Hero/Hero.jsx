import { motion } from "framer-motion";
import Containter from "../../Containter";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <Containter style={"py-12 sm:py-16 md:py-20"}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
        className="flex flex-col lg:flex-row lg:justify-between items-center"
      >
        {/* content */}
        <HeroContent />

        {/* image */}
        <HeroImage />
      </motion.section>
    </Containter>
  );
};

export default Hero;
