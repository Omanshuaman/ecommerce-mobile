const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function listProducts() {
  const res = await fetch(`https://dummyjson.com/products`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Error");
  }
  return data.products;
}

export async function fetchProductById(id: number) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Error");
  }
  return data;
}
