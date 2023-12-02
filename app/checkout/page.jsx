"use client";

import { FormContact } from "@components/Form/FormContact";
import { FormPaymentMethod } from "@components/Form/FormPaymentMethod";
import { FormShipping } from "@components/Form/FormShipping";
import PaymentLayout from "@layouts/PaymentLayout/PaymentLayout";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const itemsCart = [
  {
    id: 1,
    name: "dong ho rolex",
    price: "22.000.000 đ",
    color: "black, gold",
    size: "39mm",
    quantity: 1,
  },
  {
    id: 2,

    name: "dong ho rolex",
    price: "22.000.000 đ",
    color: "black, gold",
    size: "39mm",
    quantity: 1,
  },
  {
    id: 3,

    name: "dong ho rolex",
    price: "22.000.000 đ",
    color: "black, gold",
    size: "39mm",
    quantity: 1,
  },
];

const checkout = () => {
  const [countProduct, setCountProduct] = useState({});
  const onClickAddQuantityProduct = (id) => {
    if (countProduct[id]) {
      setCountProduct({ ...countProduct, [id]: countProduct[id] + 1 });
    } else {
      setCountProduct({
        ...countProduct,
        [id]: itemsCart.find((item) => item.id === id).quantity + 1,
      });
    }
  };
  const onClickDecreaseQuantityProduct = (id) => {
    let newQuantityProduct = countProduct;
    if (newQuantityProduct[id]) {
      if (newQuantityProduct[id] > 2) {
        setCountProduct({ ...countProduct, [id]: countProduct[id] - 1 });
      } else {
        setCountProduct({ ...countProduct, [id]: 1 });
      }
    }
  };


  return (
    <PaymentLayout>
      <section className="w-full flex">
        <section className="w-3/5 flex flex-col gap-5 pr-10">
          <FormShipping />
          <FormPaymentMethod />
          <button type="submit" class="text-white bg-black py-3 rounded-lg hover:bg-gray-800">
            Place Order
          </button>
        </section>

        <section className="w-2/5">
          <div className="border-2 border-black bg-white rounded-md">
            <div className="w-full h-11">
              <div className="w-full font-semibold text-3xl px-5 mt-3 gap-4">
                Order summary
              </div>
            </div>

            {itemsCart?.map((item) => (
              <div
                id={item.id}
                className="flex px-5 mx-2 mb-9 gap-4 pb-4 border-b"
              >
                <div>
                  <Image
                    src="/assets/images/watch1.jpg"
                    width={150}
                    height={50}
                  />
                </div>
                <div className="flex-1 flex justify-between">
                  <div className="flex flex-col justify-between">
                    <p className="text-lg font-medium leading-none">
                      {item.name}
                    </p>
                    <div>
                      <p className="m-0 text-gray-400 text-sm">
                        Color: {item.color}
                      </p>
                      <p className="text-gray-400 text-sm mb-4">
                        size: {item.size}
                      </p>
                      <div className="custom-number-input h-8  w-32">
                        <div className="flex flex-row w-full h-full rounded-lg relative bg-transparent mt-1">
                          <button
                            data-action="decrement"
                            className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={() =>
                              onClickDecreaseQuantityProduct(item.id)
                            }
                          >
                            <span className="m-auto text-2xl font-thin leading-none">
                              −
                            </span>
                          </button>

                          <input
                            type="text"
                            className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-base cursor-default flex items-center text-gray-700  outline-none"
                            name="custom-input-number"
                            value={countProduct?.[item.id] ?? item?.quantity}
                          ></input>
                          <button
                            data-action="increment"
                            className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                            onClick={() => onClickAddQuantityProduct(item.id)}
                          >
                            <span className="m-auto text-2xl font-thin leading-none">
                              +
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between items-end	">
                    <p className="text-gray-400 leading-none">{item.price}</p>
                    {/* <div className="flex justify-end"> */}
                    <div className="border-2 p-1 h-8 w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className=" object-cover cursor-pointer transition-transform transform hover:scale-110 duration-5 hover:fill-red-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-light">Shipping</div>
                </div>
                <div className="absolute -top-px left-[300px] font-body-2-semi ">
                  Free
                </div>
              </div>
            </div>
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-light">Sub total</div>
                </div>
                <div className="absolute -top-px left-[300px] font-body-2-semi ">
                  2.000.000
                </div>
              </div>
            </div>
            <div className="flex items-start relative px-5 pb-4 ">
              <div className="relative flex-1 grow h-[26px]">
                <div className="inline-flex items-center gap-[8px] absolute top-0 left-0">
                  <div className="relative w-fit font-bold text-xl">Total</div>
                </div>
                <div className="absolute -top-px left-[300px] text-xl ">
                  66.000.000
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </PaymentLayout>
  );
};

export default checkout;
