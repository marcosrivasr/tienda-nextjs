import Layout from "@/components/layout";
import Product from "@/components/product";
import Carousel from "@/components/carousel";
import { useQuery } from "react-query";
import { getItems } from "@/services/storeService";
import { Items } from "@/types"



export default function Home() {
  const { data: items } = useQuery<Items[], Error>("products", getItems);

  return (
    <Layout title="Home">
      <div className="relative mb-[30px] flex h-full w-full items-end justify-center">
        <Carousel />
      </div>

      <h3 className="mb-[10px] text-[2rem] font-medium">Latest Products</h3>
      <div className="mb-[30px] grid grid-cols-3 gap-x-[40px]">
        {items &&
          items.slice(0, 3).map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}
