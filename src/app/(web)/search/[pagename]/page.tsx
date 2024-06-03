"use client";

import Brand from "@/components/search/Brand";
import Customer from "@/components/search/Customer";
import Distributor from "@/components/search/Distributor";
import Item from "@/components/search/Item";
import Order from "@/components/search/Order";
import Publisher from "@/components/search/Publisher";
import WholeSaler from "@/components/search/WholeSaler";
import { SEARCH_ROUTES } from "@/constants/routes";
import { PageProps } from "@/types/search/page";

const SearchPage = ({ params }: PageProps) => {
  const SELECT_URL = "/search/" + params.pagename;

  return (
    <div>
      {SELECT_URL === SEARCH_ROUTES.URL.CUSTOMER && <Customer />}
      {SELECT_URL === SEARCH_ROUTES.URL.ITEM && <Item />}
      {SELECT_URL === SEARCH_ROUTES.URL.WHOLESALER && <WholeSaler />}
      {SELECT_URL === SEARCH_ROUTES.URL.PUBLISHER && <Publisher />}
      {SELECT_URL === SEARCH_ROUTES.URL.DISTRIBUTOR && <Distributor />}
      {SELECT_URL === SEARCH_ROUTES.URL.ORDER && <Order />}
      {SELECT_URL === SEARCH_ROUTES.URL.BRAND && <Brand />}
    </div>
  );
};

export default SearchPage;
