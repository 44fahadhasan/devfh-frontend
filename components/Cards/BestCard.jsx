import PropTypes from "prop-types";
import useQueryString from "../../hooks/useQueryString";
import Heading from "../Heading";
import ImageScrollOnHover from "../ImageScrollOnHover";
import Paragraph from "../Paragraph";

const BestCard = ({ setToggleModal, data }) => {
  const { website_name, website_type, scroll_image_url, _id } = data || {};

  const { handleNavigation } = useQueryString();

  return (
    <div className="group relative rounded-xl bg-gray-50 p-6 dark:bg-neutral-800/80 hover:bg-gray-100 dark:hover:bg-neutral-700/50 transition-all duration-300">
      <div className="relative">
        {/* project img */}
        <ImageScrollOnHover url={scroll_image_url} />

        {/* view button */}
        <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition-all duration-1000">
          <button
            onClick={() => {
              setToggleModal(true);
              handleNavigation("overview", _id, "/");
            }}
            className="flex items-center gap-x-1 py-1 px-2 bg-indigo-500 border border-transparent text-white rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200"
          >
            {/* icon */}
            <svg
              className="shrink-0 size-3"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </svg>
            <span className="text-xs">View</span>
          </button>
        </div>
      </div>

      {/* website name */}
      <Heading
        style={
          "mt-6 text-sm leading-6 font-semibold group-hover:text-[#6366F1] dark:group-hover:text-[#6366F1] transition-all duration-300"
        }
        title={website_name}
      />

      {/* website type name */}
      <Paragraph style={"text-sm w-full flex-none"} para={website_type} />
    </div>
  );
};

BestCard.propTypes = {
  setToggleModal: PropTypes.func,
  data: PropTypes.object,
};

export default BestCard;
