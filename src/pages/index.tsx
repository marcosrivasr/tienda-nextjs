import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/layout";
import ShoppingCart from "@/components/shoppingCart";
import Product from "@/components/product";
import { getLatestItems } from "@/services/storeService";


export default function Home({ items }: any) {
  return (
    <Layout title="Home">
      <div>
        <div>
          <div>
            <h2>Shop the Winter 2021 Collection</h2>
            <p>
              Level up your comfort this season with our new Winter Collection —
              all new joggers, beanies, drinkware, and for the first time ever,
              Octocookie cutters!
            </p>
          </div>
        </div>
      </div>

      <h3>Latest Products</h3>
      <div>
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
