import { getItems } from "../services/storeService";

export function getPathsFromTitle() {
  const items = getItems();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

export function getItemData(id) {
  const product = getItems().find((item) => convertToPath(item.title) === id);
  return {
    id,
    data: product,
  };
}

export function convertToPath(title) {
  return title.toLowerCase().replace(/\s/g, "-");
}
