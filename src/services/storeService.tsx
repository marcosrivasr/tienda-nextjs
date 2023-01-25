import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});

export async function getItems() {
  const request = await instance.get("http://localhost:3000/api/items");
  const items = await request.data;

  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
