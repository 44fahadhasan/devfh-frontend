import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" aria-label="Home">
      <h2 className="text-xl font-extrabold">
        <span className="text-[#6366F1]">DEV.</span>
        <span className="text-gray-800 dark:text-white">FH</span>
      </h2>
    </Link>
  );
};

export default Logo;
