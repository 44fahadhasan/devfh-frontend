import DownloadButton from "../../DownloadButton";
import GradientTitle from "./GradientTitle";
import TypeTitle from "./TypeTitle";

const HeroContent = () => {
  return (
    <div className="w-full lg:basis-2/5 text-center lg:text-left space-y-3">
      {/* gradient animation title */}
      <GradientTitle
        title={"Hi, I'm Fahad Hasan"}
        data={{
          from: "from-orange-700",
          via: "via-gray-800 dark:via-gray-500",
          to: "to-[#6366F1]",
        }}
      />

      {/* auto typeing animation title */}
      <TypeTitle />

      {/* resume or cv download button */}
      <DownloadButton />
    </div>
  );
};

export default HeroContent;
