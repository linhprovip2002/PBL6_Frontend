"use client";

import React from "react";

export const FormShipping = () => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        Shipping Address
      </div>
      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-1">
          STREET ADDRESS *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-1"
            placeholder="Street Address"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-2">
          COUNTRY *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-2"
            placeholder="Country"
            type="text"
          />
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-3">
          TOWN / CITY *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-3"
            placeholder="Town / City"
            type="text"
          />
        </div>
      </div>

      <div className="w-full justify-between flex items-start relative">
        <div className="flex-col w-1/2 pr-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2" htmlFor="input-4">
            STATE
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-4"
              placeholder="State"
              type="text"
            />
          </div>
        </div>
        <div className="flex-col w-1/2 pl-2 gap-3 flex items-start relative">
          <label className="relative w-fit font-hairline-2 " htmlFor="input-5">
            ZIP CODE
          </label>
          <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
            <input
              className="relative flex-1"
              id="input-5"
              placeholder="Zip code"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="inline-flex w-full items-center gap-3">
        <input type="checkbox" className="w-4 h-4"/>
        <p className="relative w-fit font-hairline-2">Use a different billing address (optional)</p>
      </div>
    </div>
  );
};
