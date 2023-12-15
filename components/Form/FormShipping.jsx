"use client";

import React from "react";

export const FormShipping = ({ user }) => {
  return (
    <div className="flex flex-col rounded-md gap-4 px-6 py-9 items-start border-2 border-black bg-white">
      <div className="relative w-fit text-xl font-semibold text-black">
        Shipping Address
      </div>
      <div className="flex flex-col w-full items-start gap-3 relative">
        <label className="relative w-fit font-hairline-2" htmlFor="input-1">
          ADDRESS *
        </label>
        <div className="flex h-10 px-3 items-center relative w-full bg-white rounded-md border border-black-300">
          <input
            className="relative flex-1"
            id="input-1"
            placeholder="Street Address"
            type="text"
            value={user.Address}
          />
        </div>
      </div>
    </div>
  );
};
