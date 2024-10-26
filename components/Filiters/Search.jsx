import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="max-w-xs mx-auto sm:mx-0 2xl:max-w-sm w-full text-gray-600 dark:text-neutral-400">
      <form className="relative flex items-center">
        <input
          type="text"
          className="dark:bg-neutral-800 w-full text-sm px-4 py-2 2xl:py-3 rounded-lg outline-none dark:focus:ring-2 dark:ring-neutral-700 focus:border-2 border-2 border-gray-200 focus:border-gray-600  dark:border-none"
          placeholder="Search Project"
        />

        {/* search icon */}
        <IoSearch className="text-xl absolute right-4 text-gray-600 dark:text-neutral-400" />
      </form>
    </div>
  );
};

export default Search;
