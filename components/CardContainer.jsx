import PropTypes from "prop-types";
import BestCard from "./Home/BestProject/BestCard";

const CardContainer = ({ data, label }) => {
  return (
    <div className="grid gap-6 lg:gap-y-8 xl:gap-x-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* single card for best project */}
      {label === "bestProject" &&
        data?.map((value, idx) => <BestCard key={idx} />)}
    </div>
  );
};

CardContainer.propTypes = {
  data: PropTypes.array,
  label: PropTypes.string,
};

export default CardContainer;
