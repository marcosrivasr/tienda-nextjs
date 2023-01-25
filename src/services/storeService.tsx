export async function getItems() {
  const request = await fetch("http://localhost:3000/api/items");
  const items = await request.json();

  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
