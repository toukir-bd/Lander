
import { products } from "@/data/product";
import ProductOrderCard from "@/components/ProductOrderCard";
import { notFound } from "next/navigation";


export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}


export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find(
    (item) => item.slug === slug
  );

  if (!product) {
    notFound();
  }

  return ( 
    <ProductOrderCard product={product} />
  );
}
