import queryString from "query-string";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const useQueryString = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (query_obj_key, query_obj_value, baseUrl) => {
      // Create a query object
      const query = {};
      query[query_obj_key] = query_obj_value;

      // Create the URL with query parameters
      const url = queryString.stringifyUrl({
        url: baseUrl,
        query,
      });

      // Use the navigate function to go to the new URL
      navigate(url);
    },

    [navigate]
  );

  return { handleNavigation };
};

export default useQueryString;
