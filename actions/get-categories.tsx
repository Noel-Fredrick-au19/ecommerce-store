import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(URL);

  return res.json();
};
console.log(
  "🚀 ~ file: get-categories.tsx:10 ~ getCategories ~ getCategories:",
  getCategories
);

export default getCategories;
