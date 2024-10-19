import { useState } from "react";
import Logo from "../Logo";
import ThemeToggle from "../ThemeToggle";
import Menu from "./Menu";
import ToggleMenu from "./ToggleMenu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="relative container mx-auto py-2.5 ps-5 pe-3 md:flex md:items-center md:justify-between md:py-0">
      <div className="flex items-center justify-between">
        {/* logo */}
        <Logo />

        {/* theme controller (small device) */}
        <ThemeToggle style={"md:hidden"} />

        {/* menu controller (small device) */}
        <ToggleMenu toggle={toggle} setToggle={setToggle} />
      </div>

      {/* menu */}
      <Menu toggle={toggle} />
    </nav>
  );
};

export default Navbar;
