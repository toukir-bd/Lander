
import Link from "next/link";
import Image from "next/image";
import { products } from "../../data/product";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        <h1 className="text-4xl font-[800] mb-6 text-center text-[#0D2843]">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-content-center">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group rounded-lg shadow p-4 flex flex-col items-center hover:shadow-xl transition bg-white"
            >
                <div className="flex items-center justify-center relative aspect-[420/380] w-[200px]">
                  <Image
                    src={product.image[0]}
                    alt={product.name}
                    fill
                    priority
                    className="object-cover"
                  />
                </div>
              <h2 className="text-[17px] text-slate-600 font-[500] group-hover:text-blue-700">{product.name}</h2>
              <p className="text-[#0D2843] mt-2 font-bold text-xl">
                <span className="text-[16px] font-[500] text-red-500 line-through me-2">{product.crossprice} Tk</span>
                {product.price} Tk
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
