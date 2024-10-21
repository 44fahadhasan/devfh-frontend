import CercleButton from "../CercleButton";

const SliderController = () => {
  return (
    <div className="mb-8 flex items-center justify-end gap-x-7 text-3xl 2xl:text-4xl dark:text-white disabled:opacity-50 disabled:pointer-events-none text-gray-500">
      {/* prev button */}
      <CercleButton icon={"arrowLeft"} />

      {/* next button */}
      <CercleButton icon={"arrowRight"} />
    </div>
  );
};

export default SliderController;
