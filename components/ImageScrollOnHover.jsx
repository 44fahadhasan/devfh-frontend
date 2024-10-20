import PropTypes from "prop-types";

const ImageScrollOnHover = ({ url }) => {
  return (
    <div className="h-[320px] w-full overflow-hidden rounded-md bg-gray-100 dark:bg-neutral-800">
      <img
        src={url}
        alt="Project Image"
        className={`w-full object-cover transition-transform duration-[3000ms] group-hover:translate-y-[calc(-100%+320px)] group-hover:duration-[7000ms]`}
      />
    </div>
  );
};

ImageScrollOnHover.propTypes = {
  url: PropTypes.string,
};

export default ImageScrollOnHover;
