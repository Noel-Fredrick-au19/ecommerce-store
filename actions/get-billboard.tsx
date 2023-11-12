import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};
console.log(
  "🚀 ~ file: get-categories.tsx:10 ~ getBillboard ~ getBillboard:",
  getBillboard
);

export default getBillboard;
