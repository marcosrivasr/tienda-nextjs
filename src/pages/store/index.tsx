import Layout from "../../src/components/layout";
import Product from "../../src/components/product";
import { getItems } from "../../src/services/storeService";
import ShoppingCart from "../../src/components/shoppingCart";

import styleProduct from "../../styles/product.module.css";

export default function Index({ items }) {
  return (
    <Layout>
      <div className={styleProduct.items}>
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
