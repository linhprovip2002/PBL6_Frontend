"use client";

import React from "react";

export const FormPaymentMethod = () => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        Payment method
      </div>

      <div className="flex-col items-start relative w-full">
        <div class="flex items-center mb-4 w-full rounded-md border p-3 bg-gray-400">
          <input
            id="default-radio-1"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4"
            checked
            disabled
          />
          <label for="default-radio-1" class="ms-2">
            Pay by card credit
          </label>
          <img
            className="pl-3"
            alt="Finance and payment"
            src="https://c.animaapp.com/mYtjeddF/img/finance-and-payment-outline-money-1.svg"
          />
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-3">
          CARD NUMBER *
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
            EXPIRATION DATE
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
              placeholder="CVC Code"
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
