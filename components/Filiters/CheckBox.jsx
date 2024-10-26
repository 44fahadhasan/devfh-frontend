const CheckBox = () => {
  return (
    <div className="flex items-center">
      <input
        id="React.js"
        name="HomeandKitchen"
        type="checkbox"
        className="appearance-none rounded-full checked:bg-[#6366F1] bg-gray-200 dark:checked:bg-[#6366F1] h-4 w-4 dark:bg-neutral-700 cursor-pointer"
        value="React.js"
      />
      <label
        htmlFor="React.js"
        className="ml-3 min-w-0 flex-1 text-gray-600 dark:text-neutral-400 cursor-pointer"
      >
        React.js
      </label>
    </div>
  );
};

export default CheckBox;
