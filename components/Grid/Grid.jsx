import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Card from "../Cards/Card";

const Grid = ({ data, label, setToggleModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className="grid gap-6 lg:gap-y-8 xl:gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"
    >
      {/* single card for projects page */}
      {label === "Projects" &&
        data?.map((value) => (
          <Card setToggleModal={setToggleModal} key={value?._id} data={value} />
        ))}
    </motion.div>
  );
};

Grid.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
  setToggleModal: PropTypes.func,
};

export default Grid;
