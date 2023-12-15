"use client";

import React from "react";

export const FormPaymentMethod = () => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        Phương thức thanh toán
      </div>

      <div className="flex-col items-start relative w-full">
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 my-2 hover:bg-gray-500 hover:text-white">
          <input
            id="bordered-radio-1"
            type="radio"
            value=""
            name="payment"
            className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-1"
            class="w-full py-4 ms-2 text-sm font-medium"
          >
            Thanh toán bằng VNPay
          </label>
        </div>
        <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 my-2 hover:bg-gray-500 hover:text-white">
          <input
            id="bordered-radio-2"
            type="radio"
            value=""
            name="payment"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            for="bordered-radio-2"
            className="w-full py-4 ms-2 text-sm font-medium"
          >
            Thanh toán bằng PayPal
          </label>
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-3">
          Số thẻ *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-3"
            placeholder="1234 1234 1234"
            type="text"
          />
        </div>
      </div>

      <div className="w-full justify-between flex items-start relative">
        <div className="flex-col w-1/2 pr-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2" htmlFor="input-4">
            Ngày hết hạn
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-4"
              placeholder="MM/ YY"
              type="text"
            />
          </div>
        </div>
        <div className="flex-col w-1/2 pl-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2 " htmlFor="input-5">
            CVC
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-5"
              placeholder="Mã CVC"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
