import PropTypes from "prop-types";

const Icon = ({ data }) => {
  const { link, icon: IconComponent } = data || {};

  return (
    <a
      className="size-8 inline-flex justify-center items-center gap-x-2 text-base rounded-full border border-gray-300 dark:border-transparent text-gray-800 dark:text-white hover:text-black dark:hover:text-neutral-400 disabled:opacity-50 disabled:pointer-events-none"
      href={link}
      target="_blank"
    >
      {/* icon */}
      <IconComponent />
    </a>
  );
};

Icon.propTypes = {
  data: PropTypes.object,
};

export default Icon;
