"use client";

import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import React from "react";
import Image from "next/image";

const complete = [
  {
    id: 1,
    imgSrc: "/assets/images/watch1.jpg",
    quantity: 2,
  },
  {
    id: 2,
    imgSrc: "/assets/images/watch1.jpg",
    quantity: 10,
  },
  {
    id: 3,
    imgSrc: "/assets/images/watch1.jpg",
    quantity: 2,
  },
];

const order = [
  {
    code: "#0123_45678",
    date: "October 19, 2023",
    total: "1,354.00",
    payment_method: "Credit card",
  },
];

const OrderComplete = () => {
  return (
    <PaymentLayout>
      <section className="inline-flex w-full justify-center ">
        <div className="inline-flex flex-col w-3/5 items-center bg-white rounded-md shadow-xl border p-3 mb-10">
          <div className="flex flex-col relative items-center">
            <div className="w-96 mt-7 text-center text-zinc-500 text-3xl font-medium font-['Poppins'] leading-loose">
              Thank you! 🎉
            </div>
            <div className="w-96 text-center text-zinc-800 text-4xl bold font-medium font-['Poppins'] leading-10">
              Your order has been received
            </div>
            <div className="flex w-full justify-center space-x-4 my-5">
              {complete?.map((item) => (
                <div className="relative border border-black">
                  <Image src={item.imgSrc} width={100} height={100} />
                  <div className="absolute flex w-[26px] h-[26px] top-[-6px] left-[85px] bg-black rounded-[80px] justify-center">
                    <div className="text-white">{item.quantity}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="w-96 h-36 justify-center items-center mt-5 gap-8 inline-flex">
              <div className="flex-col justify-start items-start gap-5 inline-flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Order code:
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Date:
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Total:
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="text-zinc-500 text-sm font-semibold font-['Inter'] leading-snug">
                    Payment method:
                  </div>
                </div>
              </div>
              {order?.map((item) => (
                <div className="flex-col justify-start items-start gap-5 inline-flex">
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item.code}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item.date}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item.total}
                  </div>
                  <div className="text-neutral-900 text-sm font-semibold font-['Inter'] leading-snug">
                    {item.payment_method}
                  </div>
                </div>
              ))}
            </div>

            <div className="px-10 py-2 mt-8 mb-10 bg-neutral-900 rounded-3xl justify-center items-center gap-2 inline-flex">
              <button
                type="submit"
                className="text-center text-white text-base font-medium font-['Inter'] leading-7"
              >
                Purchase history
              </button>
            </div>
          </div>
        </div>
      </section>
    </PaymentLayout>
  );
};

export default OrderComplete;
