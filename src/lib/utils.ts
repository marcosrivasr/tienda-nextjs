import { getItems } from "@/services/storeService";
import {Items} from "@/types"

export async function getPathsFromTitle() {
  const items: Items[] = await getItems();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

export async function getItemData(id: string) {
  const items: Items[] = await getItems();
  const product = items.find((item) => convertToPath(item.title) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(title: string) {
  return title.toLowerCase().replace(/\s/g, "-");
}
