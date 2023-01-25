import { getItems } from "../services/storeService";

export async function getPathsFromTitle() {
  const items = await getItems();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

export async function getItemData(id) {
  const items = await getItems();
  const product = items.find((item) => convertToPath(item.title) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
