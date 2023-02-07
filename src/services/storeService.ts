import axios from "axios";
import { useQuery } from "react-query";
import { useRef } from "react";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 0,
  headers: { "X-Custom-Header": "foobar" },
});

// export async function getItems() {
//   try {
//     const request = await instance.get("/products");
//     const items = await request.data;
//     return items;
//   } catch (err) {
//     console.error("Error capturado", err);
//   }
// }

// React Query
export const useGetItems = () => {
  return useQuery("items", async () => {
    try {
      const request = await instance.get("/products");
      const items = await request.data;
      return items;
    } catch (err) {
      console.error("Error capturado", err);
    }
  }, {
    // Aquí puedes agregar la configuración de React Query
    cacheTime: 60 * 60 * 1000, // cachea los resultados por 1 hora
    refetchOnWindowFocus: false, // no se vuelve a hacer la solicitud cuando la ventana está enfocada
    retry: 2, // intenta hacer la solicitud 2 veces más si falla
  });
};

// export async function getLatestItems() {
//   const items = await getItems();

//   return items.slice(0, 3);
// }

// React Query
export const useGetLatestItems = () => {
  const { data: items } = useGetItems();
  return useQuery(["latestItems", items], () => {
    return items ? items.slice(0, 3) : [];
  });
};



