import { API_ROUTES } from "@/constants/routes";
import { SearchResultDto } from "@/types/search/dtos";
import { useState, useEffect } from "react";

const useGetSearchItem = (searchData: any) => {
  const [searchResult, setSearchResult] = useState<SearchResultDto | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true);
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
        setLoading(false);
      }
    };
    fetchSearchResults();
  }, [searchData]);
  return { searchResult, loading, error };
};
export default useGetSearchItem;
