import { useEffect, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 0,
  headers: { "X-Custom-Header": "foobar" },
});

export async function getItems() {
  try {
    const request = await instance.get("/products");
    const items = await request.data;
    console.log(items);
    return items;
  } catch (err) {
    console.error("Error capturado", err);
  }
}

// export const useGetItems = () => {
//   const [query, setQuery] = useState({
//     status: "loading" as "loading" | "error" | "success",
//     data: null as any,
//     error: null as any,
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const request = await instance.get("/products");
//         const items = await request.data;

//         setQuery({ status: "success", data: items, error: null });
//       } catch (error) {
//         console.error("Error capturado", error);

//         setQuery({ status: "error", data: null, error });
//       }
//     };

//     fetchData();
//   }, []);

//   return query;
// };

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}

// React Query
// export const useGetLatestItems = () => {
//   const { data: items } = useGetItems();
//   return useQuery(["latestItems", items], () => {
//     return items ? items.slice(0, 3) : [];
//   });
// };
