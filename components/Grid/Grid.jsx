import PropTypes from "prop-types";
import Card from "../Cards/Card";

const Grid = ({ data, label }) => {
  return (
    <div className="grid gap-6 lg:gap-y-8 xl:gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* single card for best project */}
      {label === "bestProject" && data?.map((value, idx) => <Card key={idx} />)}
    </div>
  );
};

Grid.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
};

export default Grid;
