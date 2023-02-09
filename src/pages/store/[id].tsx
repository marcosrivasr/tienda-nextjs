import Layout from "@/components/layout";
import Product from "@/components/product";
import ShoppingCart from "@/components/shoppingCart";
import { getItemData, getPathsFromTitle } from "@/lib/utils";
import { Item } from "@/types";

interface ProductInfo {
  item: Item;
  qty: number;
  showAs: string;
  data: any;
  id: string;
}

export default function ProductPage({
  productInfo,
}: {
  productInfo: ProductInfo;
}) {
  return (
    <Layout title={productInfo.data.title as string}>
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

export async function getStaticProps({ params }: { params: Item }) {
  const id: unknown = params.id;
  const productInfo = await getItemData(id as string);

  return {
    props: {
      productInfo,
    },
  };
}
