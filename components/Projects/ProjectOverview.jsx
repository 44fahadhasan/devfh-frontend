import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Heading from "../Heading";
import Paragraph from "../Paragraph";
import ProjectInfos from "../ProjectsDetails/ProjectInfos";

const ProjectOverview = ({ data }) => {
  const { overview, website_name } = data || {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.9,
        delay: 0.2,
      }}
      className="py-3 sm:py-6 sm:px-5 space-y-8"
    >
      <div>
        {/* website name */}
        <p className="inter text-sm leading-6 font-semibold text-[#6366F1]">
          {website_name}
        </p>

        {/* title */}
        <Heading
          title={overview?.title}
          style={"text-xl text-3xl md:text-4xl font-semibold mb-1"}
        />

        {/* paragraph */}
        <Paragraph para={overview?.description} />
      </div>

      {/* project infos */}
      {overview?.ProjectInfos?.map((overview, idx) => (
        <ProjectInfos style={"mt-7"} key={idx} data={overview} />
      ))}
    </motion.div>
  );
};

ProjectOverview.propTypes = {
  data: PropTypes.object,
};

export default ProjectOverview;
