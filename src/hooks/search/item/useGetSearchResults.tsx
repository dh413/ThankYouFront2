import { API_ROUTES } from "@/constants/routes";
import { SearchData } from "@/types/search/common/type";
import { SearchResultDto } from "@/types/search/dtos";
import { useState, useEffect } from "react";




const useGetSearchResults = (searchData:SearchData) => {
  const [searchResult, setSearchResult] = useState<SearchResultDto | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch(API_ROUTES.SEARCH_ITEM, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(searchData),
        });

        const data = await response.json();

        setSearchResult(data);
      } catch (error) {
        setError("API에러");
      } finally {
        setIsLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchData]);
  return { searchResult, isLoading, error };
};
export default useGetSearchResults;
