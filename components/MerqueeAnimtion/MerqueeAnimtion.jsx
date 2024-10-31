import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Marquee from "react-fast-marquee";
import ImgCard from "../ProjectsDetails/ImgCard";

const MerqueeAnimtion = ({ data, merqueeLabel }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="my-6 sm:my-8 2xl:my-10"
    >
      <Marquee pauseOnHover speed={99}>
        {/* merquee for project details images */}
        {merqueeLabel === "projectDetailsImages" &&
          data?.map((value, idx) => <ImgCard key={idx} data={value} />)}
      </Marquee>
    </motion.div>
  );
};

MerqueeAnimtion.propTypes = {
  data: PropTypes.array,
  merqueeLabel: PropTypes.string,
};

export default MerqueeAnimtion;
