import Layout from "@/components/layout";
import Product from "@/components/product";
import { useQuery } from "react-query";
import { getItems } from "@/services/storeService";
import { Items, Item } from "@/types";

export default function Index() {
  const { data: items } = useQuery<Items[], Error>("products", getItems);

  return (
    <Layout title="Store">
      <div className="mb-[30px] grid grid-cols-3 gap-[40px]">
        {items &&
          items.map((item: any) => (
            <Product key={item.id} item={item} showAs="item" qty={0} />
          ))}
      </div>
    </Layout>
  );
}
