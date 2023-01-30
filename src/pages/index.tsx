import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import ShoppingCart from "@/components/shoppingCart";
import Product from "@/components/product";
import { getLatestItems } from "@/services/storeService";

export default function Home({ items }: any) {
  return (
    <Layout title="Home">
      <div className="w-full h-full flex justify-center mb-[30px]">
        <div className="bg-banner w-[95%] h-screen bg-cover bg-black rounded-[2px]">
          <div className="w-[50%] p-[40px]">
            <h2 className="text-[5rem] text-white font-bold mt-[40px] mb-[30px]">Shop the Winter 2021 Collection</h2>
            <p className="text-white text-[1.6rem]">
              Level up your comfort this season with our new Winter Collection —
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookie cutters!
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-[2rem] font-medium mb-[10px]">Latest Products</h3>
      <div className="grid grid-cols-3 gap-x-[40px] mb-[30px]">
        {items &&
          items.map((item: any) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getLatestItems();

  return {
    props: {
      items: res,
    },
  };
}
