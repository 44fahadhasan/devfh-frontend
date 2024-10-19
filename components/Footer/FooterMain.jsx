import Containter from "../Containter";
import Logo from "../Logo";
import CopyRight from "./CopyRight";
import ListsIcon from "./ListsIcon";

const FooterMain = () => {
  return (
    <div className="relative z-10">
      <Containter style={"py-10 lg:pt-16"}>
        <div className="flex gap-y-4 justify-between flex-wrap items-center">
          <div className="inline-flex items-center">
            {/* logo */}
            <Logo />

            {/* copy right content */}
            <CopyRight />
          </div>

          {/* social icons */}
          <ListsIcon />
        </div>
      </Containter>
    </div>
  );
};

export default FooterMain;
