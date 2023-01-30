import Layout from "@/components/layout";
import Product from "@/components/product";
import { getLatestItems } from "@/services/storeService";

export default function Home({ items }: any) {
  return (
    <Layout title="Home">
      <div className="mb-[30px] flex h-full w-full justify-center">
        <div className="h-screen w-[95%] rounded-[2px] bg-black bg-banner bg-cover">
          <div className="w-[50%] p-[40px]">
            <h2 className="mt-[40px] mb-[30px] text-[5rem] font-bold text-white">
              Shop the Winter 2021 Collection
            </h2>
            <p className="text-[1.6rem] text-white">
              Level up your comfort this season with our new Winter Collection —
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookie cutters!
            </p>
          </div>
        </div>
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
