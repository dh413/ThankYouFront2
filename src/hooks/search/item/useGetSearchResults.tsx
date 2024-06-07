import { API_ROUTES } from "@/constants/routes";
import { SearchData } from "@/types/search/common/type";
import { SearchResultDto } from "@/types/search/dtos";
import { useState, useEffect, useCallback } from "react";

const useGetSearchResults = (searchData: SearchData) => {
  const [searchResult, setSearchResult] = useState<SearchResultDto | null>(
    null
  );

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const fetchSearchResults = useCallback(async () => {
    try {
      setIsLoading(true);
      setErrorMsg(null);

      const response = await fetch(API_ROUTES.SEARCH_ITEM, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(searchData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      setSearchResult(data);
    } catch (error) {
      setErrorMsg("API에러");
    } finally {
      setIsLoading(false);
    }
  }, [searchData]);

  useEffect(() => {
    fetchSearchResults();
  }, [searchData, fetchSearchResults]);

  return { searchResult, isLoading, errorMsg };
};

export default useGetSearchResults;
