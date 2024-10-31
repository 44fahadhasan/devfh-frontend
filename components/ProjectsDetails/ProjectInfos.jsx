import PropTypes from "prop-types";
import Heading from "../Heading";

const ProjectInfos = ({ data, style }) => {
  const { title, lists, listType } = data || {};

  const isLinked = lists?.includes("linkedLists");

  return (
    <div className={`${style && style} space-y-2`}>
      {/* each title */}
      <Heading title={title} style={"text-xl md:text-2xl font-semibold mb-1"} />

      {/* list (horizontal & vertical) */}
      <ul
        className={`${
          listType === "horizontal"
            ? "flex flex-wrap gap-x-3"
            : "list-disc pl-5 space-y-1"
        }  text-gray-600 dark:text-neutral-400`}
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
  );
};

ProjectInfos.propTypes = {
  data: PropTypes.object,
  style: PropTypes.string,
};

export default ProjectInfos;
