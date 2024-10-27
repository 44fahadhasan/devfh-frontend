import PropTypes from "prop-types";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

const ProjectOverview = ({ data }) => {
  const { icon, title, description, lists, listType } = data || {};

  const isLinked = lists?.includes("linkedLists");

  return (
    <div className="py-3 sm:py-6 sm:px-5 space-y-8">
      <div className="flex space-x-3">
        {/* each icon */}
        <span className="text-xl sm:text-2xl md:text-3xl 2xl:text-4xl text-gray-800 dark:text-white">
          {icon}
        </span>
        <div>
          {/* each title */}
          <Heading
            title={title}
            style={"text-xl md:text-2xl font-semibold mb-1"}
          />

          {/* for each bottom contents (dynamic) */}

          {/* paragraph */}
          {description && <Paragraph para={description} />}

          {/* list (horizontal & vertical) */}
          <ul
            className={`${
              listType === "horizontal" ? "flex flex-wrap gap-x-3" : "list-disc"
            } list-inside text-gray-600 dark:text-neutral-400`}
          >
            {isLinked ? (
              <>
                {/* linked list */}
                {lists[1]?.map((linkList, idx) => (
                  <li key={idx} className="space-x-2">
                    <span>{linkList?.linkLabel}:</span>
                    <a
                      target="_blank"
                      href={linkList?.url}
                      className="hover:underline text-[#6366F1]"
                    >
                      visit
                    </a>
                  </li>
                ))}
              </>
            ) : (
              <>
                {/* list */}
                {lists?.map((list, idx) => (
                  <li key={idx}>
                    {listType === "horizontal" && "#"}
                    {list}
                  </li>
                ))}
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

ProjectOverview.propTypes = {
  data: PropTypes.object,
};

export default ProjectOverview;
