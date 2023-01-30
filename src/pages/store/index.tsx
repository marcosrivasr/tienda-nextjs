import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/storeService";
import ShoppingCart from "@/components/shoppingCart";

export default function Index({ items }) {
  return (
    <Layout title="Store">
      <div className="grid grid-cols-3 gap-[40px] mb-[30px]">
        {items &&
          items.map((item) => (
            <Product key={item.id} item={item} showAs="item" />
          ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await getItems();

  return {
    props: {
      items: res,
    },
  };
}
