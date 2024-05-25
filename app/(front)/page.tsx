import data from "@/lib/data";
import Image from "next/image";
import ProductItem from "@/components/products/productItem";

export default function Home() {
  return (
    <>
      <h2>Latest Products</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-col-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem key={product.slug} product={product} />
        ))}
      </div>
    </>
  );
}
