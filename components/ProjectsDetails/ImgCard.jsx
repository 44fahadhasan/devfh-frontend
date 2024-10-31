import PropTypes from "prop-types";

const ImgCard = ({ data }) => {
  const { img, label } = data || {};

  return (
    <figure className="my-6 sm:my-8 2xl:my-10">
      {/* img */}
      <div className="h-[60vh] sm:h-[70vh] 2xl:h-[80vh] w-full">
        <img
          src={img}
          alt={label}
          className="h-full w-full object-fill rounded"
        />
      </div>

      {/* img description */}
      <figcaption className="text-gray-600 dark:text-neutral-400 px-3 pt-3 border-s border-gray-200 dark:border-neutral-700">
        {label}
      </figcaption>
    </figure>
  );
};

ImgCard.propTypes = {
  data: PropTypes.object,
};

export default ImgCard;
