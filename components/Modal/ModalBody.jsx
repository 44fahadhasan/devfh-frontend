import PropTypes from "prop-types";
import ProjectOverview from "../Projects/ProjectOverview";

const ModalBody = ({ data, modalName }) => {
  return (
    <div className="p-4 overflow-y-auto max-h-[calc(100vh-9rem)]">
      <div className="sm:divide-y divide-gray-200 dark:divide-neutral-700">
        {/* modal body contents */}

        {/* project quick overview */}
        {modalName === "ProjectQuickOverview" &&
          data?.map((overview, idx) => (
            <ProjectOverview key={idx} data={overview} />
          ))}
      </div>
    </div>
  );
};

ModalBody.propTypes = {
  data: PropTypes.array,
  modalName: PropTypes.string,
};

export default ModalBody;
