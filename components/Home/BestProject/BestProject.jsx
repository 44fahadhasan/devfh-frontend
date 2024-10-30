import { useState } from "react";
import useFetchPublicData from "../../../hooks/useFetchPublicData";
import Containter from "../../Containter";
import LoadingSpinner from "../../Loading/LoadingSpinner";
import Modal from "../../Modal/Modal";
import SectionContent from "../../SectionContent";
import Slider from "../../Slider/Slider";

const BestProject = () => {
  const [toggleModal, setToggleModal] = useState(false);

  const { data: projects, isLoading: projectLoading } = useFetchPublicData(
    "/api/projects",
    "best-projects"
  );

  const { data: overview, isLoading: overviewLoading } = useFetchPublicData(
    "/api/projects/overview/",
    "best-projects_overview",
    "overview"
  );

  return (
    <Containter style={"py-12 sm:py-16 md:py-20"}>
      {/* section content */}
      <SectionContent
        title={"Best Projects"}
        para={
          "A proud showcase of my achievements, where hard work and dedication turn challenges into innovative solutions that enhance my skills."
        }
      />

      {/* best projects slider */}
      {projectLoading ? (
        <LoadingSpinner />
      ) : (
        <Slider data={{ projects, setToggleModal }} label={"bestProject"} />
      )}

      {/* modal for best project */}
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
    </Containter>
  );
};

export default BestProject;
