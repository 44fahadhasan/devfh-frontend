import Containter from "../../Containter";
import SectionContent from "../../SectionContent";
import BestCardContainer from "./BestCardContainer";

const BestProject = () => {
  return (
    <Containter style={"py-12 sm:py-16 md:py-20"}>
      {/* section content */}
      <SectionContent
        title={"Best Projects"}
        para={
          "A proud showcase of my achievements, where hard work and dedication turn challenges into innovative solutions that enhance my skills."
        }
      />

      {/* best projects */}
      <BestCardContainer />
    </Containter>
  );
};

export default BestProject;
