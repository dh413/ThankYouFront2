import Itemfilter from "@/components/search/Item/ItemFilter";
import ItemFooter from "@/components/search/Item/ItemFooter";
import ItemResult from "@/components/search/Item/ItemResult";

export default function SearchItemPage() {
  return (
    <>
      <Itemfilter />
      <ItemResult />
      <ItemFooter />
    </>
  );
}
