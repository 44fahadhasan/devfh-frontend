import PuffLoader from "react-spinners/PuffLoader";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center">
      <PuffLoader color="#6366F1" size={60} />
    </div>
  );
};

export default LoadingSpinner;
