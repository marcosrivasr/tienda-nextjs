import axios from "axios";
import Layout from "@/components/layout";
import Product from "@/components/product";
import { getItems } from "@/services/storeService";
import { Props } from "@/types";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

export default function Index({ items }: Props) {
  return (
    <Layout title="Store">
      <div className="mb-[30px] grid grid-cols-3 gap-[40px]">
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

// export async function getStaticProps() {
//   const instance = axios.create({
//     baseURL: "https://fakestoreapi.com",
//     timeout: 0,
//     headers: { "X-Custom-Header": "foobar" },
//   });

//   try {
//     const request = await instance.get("/products");
//     const items = await request.data;
//     return {
//       props: {
//         items,
//       },
//     };
//   } catch (err) {
//     console.error("Error capturado", err);
//   }
// }
