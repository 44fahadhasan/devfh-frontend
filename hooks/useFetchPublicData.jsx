import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import useAxiosPublic from "./useAxiosPublic";

const useFetchPublicData = (api, key, paramName) => {
  const axiosPublic = useAxiosPublic();
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get(paramName);

  // check if the query should be enabled based on parameters
  const isEnabled = useMemo(
    () => (paramName ? Boolean(paramValue) : Boolean(api)),
    [paramName, paramValue, api]
  );

  // create the full api url
  const fullApi = useMemo(
    () => (paramName ? `${api}${paramValue}` : api),
    [api, paramName, paramValue]
  );

  const { data = {}, isLoading } = useQuery({
    queryKey: [key, paramValue], // Add paramValue to queryKey for dynamic caching

    queryFn: async () => {
      const { data } = await axiosPublic.get(fullApi);
      return data?.data;
    },

    enabled: isEnabled, // Enable or disable the query based on isEnabled
    retry: 1, // Retry once on failure

    staleTime: 3 * 60 * 1000, // Set time to cache data
  });

  return { data, isLoading };
};

export default useFetchPublicData;
