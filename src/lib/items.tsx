import { getItems } from "@/services/storeService";
import { useQuery } from "react-query";
import { Items } from ".././types"
 
// export async function getPathsFromTitle() {
//   const items = await getItems();

//   console.log(items)

//   return items.map((item) => {
//     return {
//       params: {
//         id: convertToPath(item.title),
//       },
//     };
//   });
// }

// React Query
export async function getPathsFromTitle() {
  const { data } = useQuery<Items[], Error>('products', getItems);

  console.log(data.results);

  return data.results.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

// export async function getItemData(id) {
//   const items = await getItems();
//   const product = items.find((item) => convertToPath(item.title) === id);
//   return {
//     id,
//     data: product,
//   };
// }

// React Query
export async function getItemData(id) {
  const { isLoading, isError, data, error } = useQuery("title", getItems);
  // const { data: items } = getItems();
  const product = data.results.find((item) => convertToPath(item.title) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}

