import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import useFetchPublicData from "../../hooks/useFetchPublicData";
import Containter from "../Containter";
import DividerX from "../DividerX";
import Heading from "../Heading";
import LoadingSpinner from "../Loading/LoadingSpinner";
import PageTitle from "../PageTitle";
import SectionContent from "../SectionContent";
import ShareCard from "../ShareCard";
import Slider from "../Slider/Slider";
import Challenges from "./Challenges";
import DefinitionList from "./DefinitionList";
import ProjectInfos from "./ProjectInfos";

const ProjectsDetailsMain = () => {
  const { projectId } = useParams();

  const { data, isLoading } = useFetchPublicData(
    `/api/projects/${projectId}`,
    `projects-details-${projectId}`
  );

  const { website_name, images_url, overview } = data || {};

  return (
    <>
      {isLoading ? (
        <div className="py-12 sm:py-16 md:py-20">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <Containter style={"pt-12 sm:pt-16 md:pt-20"}>
            {/* page title */}
            <PageTitle title={"Project Details"} />

            {/* website name */}
            <Heading title={website_name} />

            {/* images slider */}
            <Slider
              data={{ images: images_url }}
              label={"projectDetailsImages"}
              paginationType={"bullets"}
            />
          </Containter>

          {/* section divider */}
          <DividerX style={"pt-3"} />

          <Containter style={"pb-12 sm:pb-16 md:pb-20"}>
            <motion.section
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
            >
              {/* definition lists */}
              <DefinitionList date={"March 30, 2023"} url={"#"} />

              {/* contents */}
              <div className="pt-14 sm:pt-20 md:pt-32 xl:pt-36">
                {/* website name */}
                <p className="inter text-sm leading-6 font-semibold text-[#6366F1]">
                  {website_name}
                </p>

                {/* heading & para for short summery of the project  */}
                <SectionContent
                  containerStyle={"max-w-5xl"}
                  title={overview?.title}
                  titleStyle={
                    "mt-4 text-3xl sm:text-6xl tracking-tight font-bold leading-none"
                  }
                  para={overview?.description}
                  paraStyle={"pt-4 max-w-3xl"}
                />
              </div>

              {/* bottom contents */}
              <div className="grid grid-cols-1 md:grid-cols-[60%_auto] gap-y-14 md:gap-7 items-start pt-10 md:pt-24">
                {/*  challenge */}
                <Challenges />

                {/* project infos */}
                <div className="row-auto order-1 md:order-none p-4 rounded-lg space-y-7 border-[1px] border-gray-200 dark:border-neutral-700">
                  {/* project infos */}
                  {overview?.ProjectInfos?.map((overview, idx) => (
                    <ProjectInfos style={""} key={idx} data={overview} />
                  ))}
                </div>

                {/* social share card */}
                <ShareCard />
              </div>
            </motion.section>
          </Containter>
        </>
      )}
    </>
  );
};

export default ProjectsDetailsMain;
