import PropTypes from "prop-types";
import Button from "../Button";

const DefinitionList = ({ date, url }) => {
  // component
  const definition = (title, data) => (
    <div className="first:border-0 first:ml-0 first:pl-0 first:lg:ml-0 first:lg:pl-0 border-l border-neutral-500/10 dark:border-neutral-400/10 ml-6 pl-6 lg:ml-8 lg:pl-8">
      {/* definition title */}
      <dt className="text-sm leading-6 font-semibold text-gray-600 dark:text-neutral-400">
        {title}
      </dt>

      {/* definition data */}
      <dd className="text-sm leading-6 mt-2 text-gray-600 dark:text-neutral-200">
        {data}
      </dd>
    </div>
  );

  return (
    <div className="py-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
      <dl className="flex flex-wrap h-14 overflow-hidden">
        {/* date */}
        {definition("Date", date)}

        {/* url */}
        {definition(
          "URL",
          <a target="_blank" href={url}>
            {url}
          </a>
        )}
      </dl>

      {/* button */}
      <a href={url} target="_blank" type="button">
        <Button label={"Go to website →"} />
      </a>
    </div>
  );
};

DefinitionList.propTypes = {
  date: PropTypes.object,
  url: PropTypes.string,
};

export default DefinitionList;
