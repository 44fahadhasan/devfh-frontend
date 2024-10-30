import { motion } from "framer-motion";
import { useState } from "react";
import useFetchPublicData from "../../hooks/useFetchPublicData";
import Containter from "../Containter";
import Filters from "../Filiters/Filters";
import Search from "../Filiters/Search";
import Sort from "../Filiters/Sort";
import Grid from "../Grid/Grid";
import LoadingSpinner from "../Loading/LoadingSpinner";
import Modal from "../Modal/Modal";
import Pagination from "../Pagination/Pagination";
import SectionContent from "../SectionContent";

const ProjectsMian = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const { data: projects, isLoading: projectLoading } = useFetchPublicData(
    "/api/projects",
    "projects"
  );

  const { data: overview, isLoading: overviewLoading } = useFetchPublicData(
    "/api/projects/overview/",
    "projects_overview",
    "overview"
  );

  return (
    <Containter style={"py-12 sm:py-16 md:py-20"}>
      {/* section title & content */}
      <SectionContent
        title={"What I’ve Built So Far"}
        para={
          "Each project providing new challenges that have motivated me to learn, grow with confidence, and courageously navigate my path as a developer."
        }
        containerStyle={"text-center mx-auto"}
      />

      {/* search sort & filter */}
      <div className="flex gap-4 gap-y-4 flex-col md:flex-row justify-between items-center">
        {/* search */}
        <Search />

        <div className="flex gap-10 justify-between items-center">
          {/* sort */}
          <Sort />

          {/* filter */}
          <Filters />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: 0.9,
          delay: 0.2,
        }}
        className="pb-3 border-b-[1px] mb-7 2xl:mb-8 border-gray-200 dark:border-neutral-700"
      ></motion.div>

      {projectLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* All project */}
          <Grid
            data={projects}
            label={"Projects"}
            setToggleModal={setToggleModal}
          />

          {/* pagination */}
          <Pagination />

          {/* modal for projects page */}
          <Modal
            toggleModal={toggleModal}
            setToggleModal={setToggleModal}
            modalHeading={"Quick Overview"}
            show={true}
            data={overview?.overview}
            modalName="ProjectQuickOverview"
            _id={`/Projects-Details/${overview?._id}`}
            loading={overviewLoading}
          />
        </>
      )}
    </Containter>
  );
};

export default ProjectsMian;
