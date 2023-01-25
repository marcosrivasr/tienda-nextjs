import Layout from "../../src/components/layout";
import Product from "../../src/components/product";
import ShoppingCart from "../../src/components/shoppingCart";
import { getItemData, getPathsFromTitle } from "../../src/lib/items";

export default function ProductPage({ productInfo }) {
  return (
    <Layout title={productInfo.data.title}>
      <Product item={productInfo.data} showAs="Page" />
      <ShoppingCart />
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
