import { useGetItems } from "@/services/storeService";

// React Query
export async function getPathsFromTitle() {
  const { data: items } = useGetItems();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

// React Query
export async function getItemData(id) {
  const { data: items } = useGetItems();
  const product = items.find((item) => convertToPath(item.title) === id);
  return {
    id,
    data: product,
  };
}

// React Query
export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}






