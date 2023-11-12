import { Product } from "@/types";
import NoResults from "@/components/ui/no-result";
import ProductCard from "./ui/product-card";

interface ProductListProps {
  title: string;
  items: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  console.log("🚀 ~ file: product-list.tsx:14 ~ items:", items);
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      {items && items.length === 0 && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-4">
        {items &&
          items.map((item) => <ProductCard key={item.id} data={item} />)}
      </div>
    </div>
  );
};

export default ProductList;
