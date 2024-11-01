import { useState } from "react";
import useFetchPublicData from "../../hooks/useFetchPublicData";
import Containter from "../Containter";
import DividerX from "../DividerX";
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
        containerStyle={"text-center mx-auto max-w-3xl"}
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

      {/* divider */}
      <DividerX style={"pb-3 mb-7 2xl:mb-8"} />

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
            data={{
              overview: overview?.overview,
              website_name: overview?.website_name,
            }}
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
