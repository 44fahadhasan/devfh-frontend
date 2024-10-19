import Navbar from "../../../components/Header/Navbar";

const Header = () => {
  return (
    <header className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 before:absolute before:inset-0 container w-[79%] mx-auto before:container before:mx-auto before:rounded-[26px] before:bg-white/30 dark:before:bg-neutral-800/30 before:backdrop-blur-md before:border before:border-gray-200 dark:before:border-0 inter">
      {/* navbar */}
      <Navbar />
    </header>
  );
};

export default Header;
