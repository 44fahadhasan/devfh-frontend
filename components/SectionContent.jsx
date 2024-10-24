import PropTypes from "prop-types";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const SectionContent = ({
  containerStyle,
  title,
  para,
  titleStyle,
  paraStyle,
}) => {
  return (
    <div
      className={`${containerStyle || ""} space-y-1 max-w-3xl mb-10 lg:mb-14`}
    >
      {/* heading */}
      <Heading title={title} style={titleStyle} />

      {/* paragraph */}
      {para && <Paragraph para={para} style={paraStyle} />}
    </div>
  );
};

SectionContent.propTypes = {
  containerStyle: PropTypes.string,
  titleStyle: PropTypes.string,
  paraStyle: PropTypes.string,
  title: PropTypes.string,
  para: PropTypes.string,
};

export default SectionContent;
