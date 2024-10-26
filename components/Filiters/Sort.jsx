const Sort = () => {
  return (
    <div>
      <label className="text-sm text-gray-600 dark:text-neutral-400">
        Project Type:
        <select className="dark:bg-neutral-800 px-1 py-1 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200  dark:border-none ml-2 focus:border-gray-600">
          <option className="" value="All">
            All
          </option>
          <option value="Frontend">Frontend</option>
          <option value="Full Stack">Full Stack</option>
        </select>
      </label>
    </div>
  );
};

export default Sort;
