import { useState } from "react";
import { overview, projects } from "../../data/data";
import Containter from "../Containter";
import Grid from "../Grid/Grid";
import Modal from "../Modal/Modal";
import SectionContent from "../SectionContent";

const ProjectsMian = () => {
  const [toggleModal, setToggleModal] = useState(false);

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

      {/* All project */}
      <Grid
        data={projects}
        label={"Projects"}
        setToggleModal={setToggleModal}
      />

      {/* modal for projects page */}
      <Modal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        modalHeading={"Quick Overview"}
        show={true}
        data={overview}
        modalName="ProjectQuickOverview"
      />
    </Containter>
  );
};

export default ProjectsMian;
