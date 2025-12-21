
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
      <div className="max-w-[600px] w-full mx-auto text-center flex flex-col items-center">
        <h1 className="text-5xl font-[400] mb-4 text-center">
          Welcome to
        </h1>
        <div className="flex items-center justify-center relative aspect-[420/220] w-[300px]">
          <Image
            src={Logo}
            alt="logo"
            priority
            fill
            className="object-cover"
          />
        </div>
        <p className="text-gray-600 mb-8 text-center text-[20px] font-medium tracking-[.35px] w-full">
          Explore our amazing products and find what you love.
        </p>
        <Link
          href="/products" // or /products for listing page
          className="bg-sky-400 hover:bg-sky-500 text-white font-semibold px-10 py-3 rounded-full transition">
          View All Products
        </Link>
      </div>
    </main>
  );
}
