import Layout from "@/components/layout";
import Product from "@/components/product";
import { getLatestItems } from "@/services/storeService";
import Carousel from "@/components/carousel"
 
export default function Home({ items }: any) {
  return (
    <Layout title="Home">
      <div className="mb-[30px] flex h-full w-full items-end justify-center">
        <Carousel />
      </div>

      <h3 className="mb-[10px] text-[2rem] font-medium">Latest Products</h3>
      <div className="mb-[30px] grid grid-cols-3 gap-x-[40px]">
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
