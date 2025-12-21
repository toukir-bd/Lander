

"use client";

import Link from "next/link";

interface ThankYouProps {
  orderNumber: string;
  customer_name: string;
  customer_address: string;
  customer_phone: string;
  productName: string;
  perPrice: number;
  qty: number;
  total: number;
}

export default function ThankYou({
  orderNumber,
  customer_name,
  customer_address,
  customer_phone,
  productName,
  perPrice,
  qty,
  total,
}: ThankYouProps) {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-xl w-full bg-sky-50 border-4 border-sky-300 rounded-xl p-8">
        <h1 className="flex items-center text-[24px] font-semibold text-teal-600 mb-4">
          <svg className="mb-2 me-1" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 512 512"><path fill="none" stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="m320 264l-89.6 112l-38.4-44.88"/><path fill="none" stroke="#0d9488" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16Zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"/></svg>
          Order Confirmed
        </h1>

        <p className="text-teal-600 font-[500] mb-4">
          Thanks for your order. Our team will contact you shortly!
        </p>

        <p className="text-slate-600 font-[500] mb-4 py-2 border-y border-dashed">
          Order Number: <span className="text-red-500">{orderNumber}</span>
        </p>

        <div className="space-y-2 text-slate-600 text-[15px] font-[400]">
          <p><strong>Name:</strong> {customer_name}</p>
          <p><strong>Phone:</strong> {customer_phone}</p>
          <p><strong>Address:</strong> {customer_address}</p>
          <p><strong>Product Name:</strong> {productName}</p>
          <p><strong>Product Per Price:</strong> {perPrice} Tk</p>
          <p><strong>Quantity:</strong> {qty}</p>
          <p className="text-lg font-semibold">
            Total: {total} Tk
          </p>
        </div>

        <Link href="/" className="inline-block mt-6 bg-sky-600 text-white px-6 py-3 rounded font-semibold">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
