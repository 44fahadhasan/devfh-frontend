import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useProject = () => {
  const axiosPublic = useAxiosPublic();

  const { data: projects = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/api/projects");
      return data?.data;
    },
  });

  return { projects, isLoading };
};

export default useProject;
