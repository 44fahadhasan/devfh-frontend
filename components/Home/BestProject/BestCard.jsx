import { Link } from "react-router-dom";
import Heading from "../../Heading";
import ImageScrollOnHover from "../../ImageScrollOnHover";
import Paragraph from "../../Paragraph";

const BestCard = () => {
  return (
    <div className="group relative rounded-xl bg-gray-50 p-6 dark:bg-neutral-800/80 hover:bg-gray-100 dark:hover:bg-neutral-700/50">
      <Link to={""}>
        {/* project img */}
        <ImageScrollOnHover url={"https://i.imgur.com/aFFEZ9U.jpg"} />

        <div className="flex flex-wrap items-center mt-6">
          {/* website name */}
          <Heading
            style={
              "text-sm leading-6 font-semibold group-hover:text-[#6366F1] dark:group-hover:text-[#6366F1]"
            }
            title={"Shopify"}
          />

          {/* view icon */}
          <svg
            className="w-6 h-6 flex-none opacity-0 group-hover:opacity-100"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M9.75 15.25L15.25 9.75M15.25 9.75H10.85M15.25 9.75V14.15"
              stroke="#6366F1"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>

      {/* website type name */}
      <Paragraph
        style={"text-sm w-full flex-none"}
        para={"Ecommerce platform website"}
      />
    </div>
  );
};

export default BestCard;
