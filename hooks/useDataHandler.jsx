import { useContext } from "react";
import { DataContext } from "../context/DataProvider";

const useDataHandler = () => {
  return useContext(DataContext);
};

export default useDataHandler;
