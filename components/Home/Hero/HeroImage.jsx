import { motion } from "framer-motion";
import useTheme from "../../../hooks/useTheme";
import developerDark from "../../../src/assets/images/hero/developer-dark.svg";
import developerLight from "../../../src/assets/images/hero/developer-light.svg";

const HeroImage = () => {
  const { theme } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="w-full lg:basis-3/5 text-right float-right mt-8 lg:mt-0"
    >
      {/* img */}
      <img
        src={theme === "light" ? developerLight : developerDark}
        alt="Developer"
      />
    </motion.div>
  );
};

export default HeroImage;
