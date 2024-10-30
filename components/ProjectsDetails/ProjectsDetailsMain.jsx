import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useFetchPublicData from "../../hooks/useFetchPublicData";
import Containter from "../Containter";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ProjectsDetailsMain = () => {
  const { projectId } = useParams();

  const { data, isLoading } = useFetchPublicData(
    `/api/projects/${projectId}`,
    `projects-details-${projectId}`
  );

  console.log(data, isLoading);

  return (
    <Containter style={"py-12 sm:py-16 md:py-20"}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      >
        <Heading title={"Project Details"} />
        <Paragraph para={projectId} />
      </motion.section>
    </Containter>
  );
};

export default ProjectsDetailsMain;
