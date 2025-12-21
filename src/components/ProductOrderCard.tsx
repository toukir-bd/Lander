"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { Product } from "../data/product";
import ThankYou from "./ThankYou";

interface Props {
  product: Product;
}

export default function ProductOrderCard({ product }: Props) {
  const [qty, setQty] = useState<number>(1);
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>("");

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const increase = () => setQty((q) => q + 1);
  const decrease = () => setQty((q) => (q > 1 ? q - 1 : 1));

  const totalPrice = qty * product.price;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!formData.name || !formData.address || !formData.phone) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    // Generate order number (YYYYMMDD-HHMMSS)
    const now = new Date();
    const generatedOrderNo =
      "ORD-" +
      String(now.getDate()).padStart(2, "0") +
      String(now.getMonth() + 1).padStart(2, "0") +
      String(now.getHours()).padStart(2, "0") +
      String(now.getMinutes()).padStart(2, "0") +
      String(now.getSeconds()).padStart(2, "0");

    const templateParams = {
      orderNumber: generatedOrderNo,
      customer_name: formData.name,
      customer_address: formData.address,
      customer_phone: formData.phone,
      product_name: product.name,
      quantity: qty,
      unit_price: product.price,
      total_price: totalPrice,
    };

    try {
      await emailjs.send(
        "service_rcdi9kq",
        "template_5ljvg39",
        templateParams,
        "86DD2Jn9rUHV69ngK"
      );

      setOrderNumber(generatedOrderNo);
      setShowThankYou(true);

    } catch (error) {
      console.error(error);
      alert("Failed to send order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (showThankYou) {
    return (
      <ThankYou
        orderNumber={orderNumber}
        customer_name={formData.name}
        customer_phone={formData.phone}
        customer_address={formData.address}
        productName={product.name}
        perPrice={product.price}
        qty={qty}
        total={totalPrice}
      />
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 pt-5 sm:pt-14 pb-20">
      <div className="max-w-[1200px] w-full mx-auto px-4">
        {/* Product Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-sky-900 rounded-[15px] p-3">
          <div className="flex items-center justify-center relative aspect-[420/380] w-full bg-white rounded-[10px] overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name} 
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <h1 className="text-[18px] sm:text-[24px] font-[500] text-sky-300">{product.name}</h1>
            <div className="text-[24px] font-[800] text-sky-100">
              <span className="text-[16px] font-[500] text-red-500 line-through me-2">{product.crossprice} Tk</span>
              {product.price} Tk
            </div>
            <ul className="text-sky-100 text-[15px] leading-[24px] pb-3">
              <span className="text-[18px] font-[600]">Descriptions:</span>
              {product.description.map((item, i) => {
                // Case 1: **Label:** Value
                const labelMatch = item.match(/^\*\*(.+?):\*\*\s?(.*)$/);

                // Case 2: **Entire line bold**
                const fullBoldMatch = item.match(/^\*\*(.+)\*\*$/);

                return (
                  <li key={i} className="flex w-full text-sky-100 mb-[7px]">
                    {labelMatch ? (
                      <>
                        <strong className="font-semibold me-2">
                          {labelMatch[1]}:
                        </strong>{" "}
                        <span>{labelMatch[2]}</span>
                      </>
                    ) : fullBoldMatch ? (
                      <strong className="font-semibold mt-5 mb-1">
                        {fullBoldMatch[1]}
                      </strong>
                    ) : (
                      item
                    )}
                  </li>
                );
              })}
            </ul>
            <Link
              href="#orderForm"
              className="bg-sky-400 hover:bg-sky-500 text-sky-950 font-semibold text-[18px] px-8 py-3 rounded-full text-center"
            >
              Click here to Order this item
            </Link>
          </div>
        </div>

        <h1 className="mt-10 bg-sky-900 text-white font-[600] text-[20px] px-10 py-3 text-center">
          To order this item, fill out the form below:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-4 border-sky-900 p-2 sm:p-6 bg-white" id="orderForm">
          <div className="border-b border-dashed col-span-1 sm:col-span-2 bg-slate-200 p-3">
            <div className="w-full flex items-start gap-4">
              <div className="w-16 h-16 relative bg-white rounded flex items-center justify-center text-gray-400">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="object-cover rounded w-[200px] h-[200px]"
                  priority={true} // optional for important images
                  fill
                />
              </div>
              <div className="flex-1 text-sm">
                <p className="text-[14px] font-[500] text-slate-500">Free Delivery-Original</p>
                <p className="text-[16px] font-[600] text-slate-600">{product.name}:  
                  <span className="text-slate-900 ms-2">{product.price} Tk</span>
                </p>
              </div>
            </div>
            <div className="flex space-x-4 items-center mt-3">
              <div className="text-[16px] font-[500] text-[#0D2843]">Quantity:</div>
              <div className="flex items-center justify-center gap-4 border border-slate-400 p-1">
                <button className="w-8 h-8 rounded bg-sky-300 font-bold" onClick={decrease}>−</button>
                <span className="text-[16px] font-[500] text-[#0D2843]">{qty}</span>
                <button className="w-8 h-8 rounded bg-sky-300 font-bold" onClick={increase}>+</button>
              </div>
              <div className="text-[18px] font-[600] text-[#0D2843]">{totalPrice} Tk</div>
            </div>
          </div>
          {/* Billing */}
          <div className=" bg-sky-900 p-3 sm:p-6">
            <h2 className="text-sky-300 text-[24px] font-semibold mb-4">Billing Details</h2>
            <div className="w-full">
              <label className="inputLabel">Your Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="inputPlaceholder mb-5"
              />
              <label className="inputLabel">Your Phone</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="inputPlaceholder mb-5"
              />
              <label className="inputLabel">Your Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleTextAreaChange}
                placeholder="Full Address"
                className="inputPlaceholder textArea mb-5 py-3"
              ></textarea>
              <label className="inputLabel text-[20px] font-[700]">Shipping</label>
              <input
                value="Free Shipping"
                disabled
                className="inputPlaceholder mt-3"
              />
            </div>
          </div>

          {/* ORDER PANEL — FULLY RESTORED */}
          <div className="flex flex-col space-y-5">
            <h2 className="text-emerald-900  text-[24px] font-semibold mb-4">Your order</h2>

            <div className="flex items-start gap-3 py-4 border-b border-dashed border-slate-400">
              <div className="w-10 h-10 relative bg-emerald-200 rounded">
                <Image src={product.image} alt={product.name} fill className="object-cover rounded" />
              </div>
              <div className="flex-1">
                <p className="text-[14px] font-[500] text-slate-500">Free Delivery-Original</p>
                <p className="text-[16px] font-[600] text-slate-600">{product.name}</p>
                <p className="text-lg font-semibold">× {qty}</p>
              </div>
              <div className="font-semibold">{product.price} Tk</div>
            </div>

            <div className="flex justify-between border-b border-dashed border-slate-400 py-3">
              <span className="text-sky-600 font-semibold">Subtotal</span>
              <span className="font-semibold">{totalPrice} Tk</span>
            </div>

            <div className="flex justify-between py-3 font-semibold">
              <span className="text-sky-600">Total</span>
              <span>{totalPrice} Tk</span>
            </div>

            <div className="bg-slate-200 p-4 rounded">
              <p className="text-[14px] font-[500] text-slate-500">Cash on delivery</p>
              <p className="text-[16px] font-[500] text-slate-600">Pay after receiving product</p>
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white text-[18px] py-3 rounded font-semibold disabled:opacity-60"
            >
              🔒 {loading ? "Placing Order..." : "Confirm the Order"}: {totalPrice} Tk
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
