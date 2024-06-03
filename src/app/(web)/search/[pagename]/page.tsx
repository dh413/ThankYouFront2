"use client";

import Item from "@/components/search/Item";
import { SEARCH_ROUTES } from "@/constants/routes";
import { PageProps } from "@/types/search/page";

const SearchPage = ({ params }: PageProps) => {
  const SELECT_URL = "/search/" + params.pagename;

  return (
    <div>
      {SELECT_URL === SEARCH_ROUTES.URL.CUSTOMER && <Item />}
      {SELECT_URL === SEARCH_ROUTES.URL.ITEM && <Item />}
      {SELECT_URL === SEARCH_ROUTES.URL.WHOLESALER && <Item />}
      {SELECT_URL === SEARCH_ROUTES.URL.PUBLISHER && <Item />}
      {SELECT_URL === SEARCH_ROUTES.URL.DISTRIBUTEOR && <Item />}
    </div>
  );
};

export default SearchPage;
