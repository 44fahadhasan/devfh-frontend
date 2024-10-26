import { useEffect, useState } from "react";
import LoadingBar from "react-top-loading-bar";

const TopLoadingBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(100);
  }, []);

  return (
    <div>
      <LoadingBar
        color="#6366F1"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
        height={5}
      />
    </div>
  );
};

export default TopLoadingBar;
