import { useState } from "react";
import { projects } from "../../../data/data";
import Containter from "../../Containter";
import Modal from "../../Modal/Modal";
import SectionContent from "../../SectionContent";
import Slider from "../../Slider/Slider";

const BestProject = () => {
  const [toggleModal, setToggleModal] = useState(false);

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
      <Slider data={{ projects, setToggleModal }} label={"bestProject"} />

      {/* modal for best project */}
      <Modal
        toggleModal={toggleModal}
        setToggleModal={setToggleModal}
        modalHeading={"Quick Overview"}
        show={true}
        data={projects[0]?.overview}
        modalName="ProjectQuickOverview"
        _id={projects[0]?._id}
      />
    </Containter>
  );
};

export default BestProject;
