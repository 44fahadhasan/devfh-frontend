import { NavLink } from "react-router-dom";
import { listItems } from "../../data/data";

const ListItem = () => {
  return (
    <>
      {listItems?.map(({ _id, name, path }) => (
        <NavLink
          key={_id}
          to={path}
          aria-label={name}
          className={({ isActive }) =>
            isActive
              ? "p-3 ps-px sm:px-3 md:py-4 text-sm text-indigo-500 hover:text-indigo-500 block dark:text-indigo-500 dark:hover:text-indigo-500 relative md:hover:after:absolute md:after:bg-indigo-500 md:hover:after:w-[73%] md:hover:after:h-[2px] md:after:block md:after:bottom-0 md:after:transition-all md:after:duration-300 transition-all duration-300 md:after:absolute md:after:w-[73%] md:after:h-[2px]"
              : "p-3 ps-px sm:px-3 md:py-4 text-sm text-gray-800 dark:text-white hover:text-indigo-500 block dark:hover:text-indigo-500 xmax-md:py-3 xmax-md:px-3 relative md:hover:after:absolute md:after:bg-indigo-500 md:after:w-0 md:hover:after:w-[73%] md:hover:after:h-[2px] md:after:block md:after:bottom-0 md:after:transition-all md:after:duration-300 transition-all duration-300"
          }
        >
          {name}
        </NavLink>
      ))}
    </>
  );
};

export default ListItem;
