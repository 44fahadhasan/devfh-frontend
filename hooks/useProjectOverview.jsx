import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useProjectOverview = () => {
  const axiosPublic = useAxiosPublic();

  let [searchParams] = useSearchParams();

  const id = searchParams.get("overview");

  const { data: overview = [], isLoading } = useQuery({
    queryKey: ["overview"],
    enabled: Boolean(id),
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/api/projects/overview/${id}`);
      return data?.data;
    },
  });

  return { overview, isLoading };
};

export default useProjectOverview;
