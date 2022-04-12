import Link from "next/link";
import Image from "next/image";
import Layout from "../components/layout";
import ShoppingCart from "../components/shoppingCart";
import Product from "../components/product";
import style from "../styles/Home.module.css";
import { getLatestItems } from "../services/storeService";
import styleProduct from "../styles/product.module.css";

export default function Home({ items }) {
  return (
    <div>
      <Layout>
        <div className={style.banner}>
          <div className={style.bannerBackground}>
            <div className={style.bannerInfo}>
              <h2>Shop the Winter 2021 Collection</h2>
              <p>
                Level up your comfort this season with our new Winter Collection
                — all new joggers, beanies, drinkware, and for the first time
                ever, Octocookie cutters!
              </p>
            </div>
          </div>
        </div>

        <h3>Latest Products</h3>
        <div className={styleProduct.items}>
          {items &&
            items.map((item) => (
              <Product key={item.id} item={item} showAs="item" />
            ))}
        </div>
      </Layout>
    </div>
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
