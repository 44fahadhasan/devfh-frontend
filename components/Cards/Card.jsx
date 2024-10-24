import PropTypes from "prop-types";
import Heading from "../Heading";
import ImageScrollOnHover from "../ImageScrollOnHover";
import Paragraph from "../Paragraph";

const Card = ({ setToggleModal }) => {
  return (
    <button type="button" onClick={() => setToggleModal(true)}>
      <div className="rounded-xl cursor-pointer mb-10 sm:mb-0 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:shadow-xl relative top-0 hover:-top-2 transition-all duration-300 ease-in overflow-hidden group">
        {/* project img */}
        <ImageScrollOnHover url={"https://i.imgur.com/aFFEZ9U.jpg"} />

        <div className="text-center px-4 py-6">
          {/* website name */}
          <Heading
            style={
              "mt-6 text-sm sm:text-base leading-6 font-semibold group-hover:text-[#6366F1] dark:group-hover:text-[#6366F1] transition-all duration-300"
            }
            title={"Shopify"}
          />

          {/* website type name */}
          <Paragraph
            style={"text-sm w-full flex-none"}
            para={"Ecommerce platform website"}
          />
        </div>
      </div>
    </button>
  );
};

Card.propTypes = {
  setToggleModal: PropTypes.func,
};

export default Card;
